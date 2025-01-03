import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import SignupModels from "../model/signupModel.js";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key_here";

// User Signup
export const signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await SignupModels.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new SignupModels({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// User Login
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await SignupModels.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
