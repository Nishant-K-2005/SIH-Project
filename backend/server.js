const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const User = require("./models/registerModel");
const userInfo = require('./models/userModel');
const familyInfo = require('./models/familyModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const crypto = require("crypto");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(cors());

mongoose.connect(process.env.URI)
    .then(() => {
        console.log("Connected Succesfully");
        app.listen(process.env.PORT || 8000, (err) => {
            if (err) throw err;
            console.log("Server is running at", process.env.PORT);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    }
    );

// app.get("/", (req, res) => {
//     res.send("api running test");
// });

// Generate a secure secret key using crypto (only once and store securely)
const SECRET_KEY = crypto.randomBytes(64).toString('hex');

app.post("/register", async (req, res) => {
    const { rollno, motherName, cndtName, fatherName, yearofpassing, board, aadharcard, familyincome, isDomicile,cuet, cuetNum, neet, neetNum, jee, jeeNum, mobile, email, password } = req.body;
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
        res.status(201).json({ message: "User registered"});
    } catch (error) {
        return res.status(400).json({ message: error.message});
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

        // // Optionally, you can set the token in a cookie
        res.cookie('token', token, { httpOnly: true });

        res.status(200).json({ message: "ok", user: user, token: token });
    } else {
        res.status(400).json({ message: "Invalid credentials" });
    }
});



