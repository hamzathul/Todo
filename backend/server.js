import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import todoRoutes from "./routes/todo.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
  connectDB();
});
