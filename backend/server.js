const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();



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

app.get("/", (req, res) => {
    res.send("api running test");
});







