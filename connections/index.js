import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import signupLoginRoutes from './routes/signupLoginRoutes.js';
import contactRoutes from "./routes/contactRoutes.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB successfully.");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err.message);
        process.exit(1);
    });

// Routes
app.use('/api', userRoute);
app.use('/api/auth', signupLoginRoutes);
app.use("/api/contacts", contactRoutes);   // Route for contacts
