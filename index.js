import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import todoRoutes from "./Routes/todoRoutes.js";

const app = express();
dotenv.config();
mongoose.connect(process.env.DB_URI);
app.use(express.json());
app.use("/api/todos", todoRoutes);
app.listen(process.env.PORT, () => {
  console.log("Server running on", process.env.PORT);
});
