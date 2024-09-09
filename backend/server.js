const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const User = require("./models/registerModel");
const userInfo = require('./models/userModel');
const familyInfo = require('./models/familyModel');
const addressInfo = require('./models/contactModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const upload = require("./config/multerconfig");
const { generateCandidateID } = require("./config/candidateRand");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.URI)
    .then(() => {
        console.log("Connected Successfully to MongoDB");
        app.listen(process.env.PORT || 8000, (err) => {
            if (err) throw err;
            console.log("Server is running at", process.env.PORT);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    });

// Use a consistent secret key
const SECRET_KEY = process.env.JWT_SECRET_KEY;  // Replace with your actual secret key

//Configure the email transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    },
})

app.post("/register", async (req, res) => {
    const { rollno, motherName, cndtName, fatherName, yearofpassing, board, aadharcard, familyincome, isDomicile, cuet, cuetNum, neet, neetNum, jee, jeeNum, mobile, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ message: "User already exists" });
    }

    try {
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        // Create and save the new user
        await User.create({
            rollno,
            motherName,
            cndtName,
            fatherName,
            yearofpassing,
            board,
            aadharcard,
            familyincome,
            isDomicile,
            cuet,
            cuetNum,
            neet,
            neetNum,
            jee,
            jeeNum,
            mobile,
            email,
            password: hash,  // Store the hashed password
        });
        res.status(201).json({ message: "User registered" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    let user = await User.findOne({ email });

    if (user) {
        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate a JWT token
        const token = jwt.sign(
            {
                email: user.email,
                userId: user._id
            },
            SECRET_KEY,
            { expiresIn: '1h' }
        );

        // Optionally, you can set the token in a cookie
        res.cookie('token', token, { httpOnly: true });

        res.status(200).json({ message: "ok", user: user});
    } else {
        res.status(400).json({ message: "Invalid credentials" });
    }
});

app.post('/user', isLoggedIn,upload.single("image"), async (req, res) => {

    const user = await User.findOne({ email: req.user.email });

    const { name,gender, dateOfBirth, casteCategory, subCasteCategory, physicalDisablitiy, aadharDetails } = req.body;

    try {
        let userDeatails = await userInfo.create({
            registerID: user._id,
            candidateId: generateCandidateID,
            name: user.cndtName || name,
            gender,
            domicileJandK: user.isDomicile,
            dateOfBirth,
            casteCategory,
            subCasteCategory,
            physicalDisablitiy,
            aadharDetails: user.aadharcard || aadharDetails
        });
        user.userImage = req.file.filename;
        await user.save();
        res.status(201).json({ message: "User Details saved", user: userDeatails });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/user/familyInfo', isLoggedIn, upload.single('image'), async (req, res) => {
    let user = await User.findOne({ email: req.user.email });
    const { fatherName, fatherOccupation, fatherDesignation, motherName, motherOccupation, motherDesignation, familyAnnualIncome } = req.body;

    try {
        let family = await familyInfo.create({
            user: user._id,
            fatherName,
            fatherOccupation,
            fatherDesignation,
            motherName,
            motherOccupation,
            motherDesignation,
            familyAnnualIncome
        });
        user.familyInfo.push(family._id);
        family.fImage = req.file.filename;
        family.mImage = req.file.filename;
        await family.save();
        await user.save();
        res.status(201).json({ message: "Family Information saved", family: family });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/user/addressInfo', isLoggedIn, async function (req, res) {

    let user = await User.findOne({ email: req.user.email });
    const { alternateMobileNumber, 
        alternateEmailAddress,
        p_houseNo,
        p_street,
        p_villageTehsilBlock,
        p_addressLine,
        p_state,
        p_district,
        p_city,
        p_pinCode,
        c_houseNo,
        c_street,
        c_villageTehsilBlock,
        c_addressLine,
        c_state,
        c_district,
        c_city,
        c_pinCode } = req.body;


    try {
        let address = await addressInfo.create({
            user: user._id,
            mobileNumber: user.mobile,
            alternateMobileNumber,
            emailAddress: user.email,
            alternateEmailAddress,
                p_houseNo,
                p_street,
                p_villageTehsilBlock,
                p_addressLine,
                p_state,
                p_district,
                p_city,
                p_pinCode,
                c_houseNo,
                c_street,
                c_villageTehsilBlock,
                c_addressLine,
                c_state,
                c_district,
                c_city,
                c_pinCode
        });
        user.contactDetails.push(address._id);
        await user.save();

        res.status(201).json({ message: "Address Information saved", address: address });
    } catch (error) {
        res.status(500).json({ message: error.message});
    }

});

app.post('/user/forgot-password', async function (req, res) {
    const { email } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const resetToken = crypto.randomBytes(32).toString('hex');
        const resetTokenExpiresIn = Date.now() + 15 * 60 * 1000; // 15 minutes expiry

        user.resetToken = resetToken;
        user.resetTokenExpires = resetTokenExpiresIn;

        await user.save();

        // Send email with the reset token
        const resetUrl = `http://localhost:5000/user/reset-password/${resetToken}`;

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Password Reset Request',
            html: `<p>You requested a password reset. Click the link below to reset your password:</p>
               <a href="${resetUrl}">Reset Password</a>
               <p>If you did not request this, please ignore this email.</p>`,
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                // console.log(err);
                return res.status(500).json({ message: "Failed to send email" });
            }
            // console.log('Email sent:', info.response);
            res.status(200).json({ message: "Reset password email sent" });
        });
    } catch (err) {
        // console.error(err);
        res.status(500).json({ message: "Server error"});
    }
});

app.post('/user/reset-password', async function (req, res) {
    const { newPassword, resetToken } = req.body;

    try {
        const user = await User.findOne({
            resetToken,
            // Check if token has not expired
            resetTokenExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(403).json({ message: "Invalid or expired reset token" });
        }

        // Here, replace this with hashing the new password before saving
        user.password = newPassword;

        // Clear the reset token and expiry
        user.resetToken = null;
        user.resetTokenExpiry = null;

        await user.save();

        res.send('Password has been reset successfully');
    } catch (error) {
        res.status(500).send('Server error');
    }
});

app.post('/user/logout', function (req, res) {
    res.clearCookie('token');
    res.status(200).json({ message: "Logged out" }); // OK status code
});

function isLoggedIn(req, res, next) {
    if (!req.cookies.token) {
        return res.status(403).json({ message: "Access denied. Please log in." }); // Forbidden status code
    }

    try {
        const data = jwt.verify(req.cookies.token, SECRET_KEY);
        req.user = data; // Add user data to request object
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token", cookie: req.cookies }); // Forbidden status code
    }
}
