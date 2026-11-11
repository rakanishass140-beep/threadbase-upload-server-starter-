import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../middleware/auth.js";

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username !== "Ada" || password !== "password") {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ username: "Ada" }, JWT_SECRET, { expiresIn: "1h" });

  res.json({ token });
});

export default router;
