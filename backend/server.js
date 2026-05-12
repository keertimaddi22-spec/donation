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

// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected 💛"))
  .catch((err) => console.log("DB error:", err));

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// REGISTER
app.post("/register", async (req, res) => {
  try {
    console.log("REGISTER HIT:", req.body);

    const { name, email, password } = req.body;

    const existing = await User.findOne({ email });

    if (existing) {
      return res.status(400).json({ message: "User already exists ❌" });
    }

    const user = new User({ name, email, password });
    await user.save();

    console.log("USER SAVED:", user);

    return res.status(201).json({ message: "Registered successfully ✅" });

  } catch (err) {
    console.log("REGISTER ERROR:", err);
    return res.status(500).json({ message: err.message });
  }
});

// LOGIN
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials ❌" });
    }

    const token = jwt.sign({ email }, SECRET, { expiresIn: "1d" });

    return res.status(200).json({ token });

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} 🚀`);
});