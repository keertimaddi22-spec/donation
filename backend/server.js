import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const SECRET = "mysecretkey";

// ✅ MongoDB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected 💛"))
  .catch((err) => console.log("Error:", err));

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});


// ================== AUTH ==================

// 👉 REGISTER
app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({ message: "User already exists ❌" });
    }

    const user = new User({ email, password });
    await user.save();

    res.json({ message: "User registered ✅" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// 👉 LOGIN
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials ❌" });
    }

    const token = jwt.sign({ email }, SECRET);

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ================== SERVER ==================

app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});