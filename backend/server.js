import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();

app.use(express.json());

// ✅ FIXED CORS (IMPORTANT)
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

const SECRET = "mysecretkey";

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected 💛"))
  .catch((err) => console.log("DB error:", err));

// test route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// REGISTER
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "User already exists ❌" });
    }

    const user = new User({ name, email, password });
    await user.save();

    return res.status(201).json({ message: "Registered successfully ✅" });
  } catch (err) {
    return res.status(500).json({ message: "Server error ❌" });
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
    return res.status(500).json({ message: "Server error ❌" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} 🚀`);
});