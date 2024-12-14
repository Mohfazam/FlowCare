const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");


const User = require("./models");

const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));


mongoose.connect("mongodb+srv://mohfazam:wPlvY91k1HgmrD13@cluster0.f8f0e.mongodb.net/FlowCare")
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.post("/Signup", async(req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password){
        return res.status(400).json({message: "please fill all the fields"});
    }

    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "email already exists"});
        }

        const hashedpassword = await bcrypt.hash(password, 10);
        const newUser = new User({name, email, password: hashedpassword});

        await newUser.save();
        res.status(201).json({message: "You have signed up successfully"});
    }catch(error){
        console.log("Error while signing you up", error);
    }

});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
        console.log("Missing email or password");
        return res.status(400).json({ message: "Please provide both email and password." });
    }
  
    try {
        const user = await User.findOne({ email });
        if (!user) {
                console.log("No user found with this email:", email);
            return res.status(400).json({ message: "Invalid email or password" });
        }
        console.log("User found:", user);

        const isPasswordalid = await bcrypt.compare(password, user.password);
        if (!isPasswordalid) {
                console.log("Password mismatch for email:", email);
            return res.status(400).json({ message: "Invalid email or password" });
        }

        console.log("Login successful for email:", email);
        return res.status(200).json({ message: "You have logged in successfully" });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
});

  


app.listen(3000);