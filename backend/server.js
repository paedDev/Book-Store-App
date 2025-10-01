import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
dotenv.config();
const app = express();
const PORT = 5001;

// app.use(cors());
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("hello");
});
app.use("/api/auth", authRoutes);
connectDb().then(() => {
  app.listen(PORT, (req, res) => {
    console.log(`Listenng to port ${PORT}`);
  });
});
