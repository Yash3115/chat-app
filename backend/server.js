import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import connectToMongoDB from "./db/connectToMongodb.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res, next) => {
    res.send("Hello World!")
})

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
})