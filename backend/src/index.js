import express from "express";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

const app = express();

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
