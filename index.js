import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import todoRoutes from "./Routes/todoRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
mongoose.connect(process.env.DB_URI);
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/users", userRoutes);
app.use("/api/todos", todoRoutes);
app.listen(process.env.PORT, () => {
  console.log("Server running on", process.env.PORT);
});
