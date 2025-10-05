import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
// middleware help get json data
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("hello");
  // testing purposes
});
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
connectDb().then(() => {
  app.listen(PORT, (req, res) => {
    console.log(`Listenng to port ${PORT}`);
  });
});
