import User from "../model/userModel.js";
import bcrypt from "bcrypt";

// Helper function for consistent responses
const sendResponse = (res, status, message, data = null) => {
    res.status(status).json({ status, message, data });
};

// Create a new user
export const create = async (req, res) => {
    try {
        const { email } = req.body;

        // Check if the user already exists
        const userExist = await User.findOne({ email });
        if (userExist) return sendResponse(res, 400, "User already exists");

        // Create and save the new user
        const newUser = new User(req.body);
        const saveData = await newUser.save();

        sendResponse(res, 201, "User created successfully", saveData);
    } catch (error) {
        sendResponse(res, 500, error.message);
    }
};

// Get all users
export const getAllUser = async (req, res) => {
    try {
        const userData = await User.find();
        if (!userData || userData.length === 0) return sendResponse(res, 404, "No users found");

        sendResponse(res, 200, "Users retrieved successfully", userData);
    } catch (error) {
        sendResponse(res, 500, error.message);
    }
};

// Get a user by ID
export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) return sendResponse(res, 404, "User not found");

        sendResponse(res, 200, "User retrieved successfully", user);
    } catch (error) {
        sendResponse(res, 500, error.message);
    }
};

// Update user by ID
export const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUserData = req.body;

        const userExist = await User.findById(id);
        if (!userExist) return sendResponse(res, 404, "User not found");

        const updatedUser = await User.findByIdAndUpdate(id, updatedUserData, { new: true });
        sendResponse(res, 200, "User updated successfully", updatedUser);
    } catch (error) {
        sendResponse(res, 500, error.message);
    }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const userExist = await User.findById(id);
        if (!userExist) return sendResponse(res, 404, "User not found");

        await User.findByIdAndDelete(id);
        sendResponse(res, 200, "User deleted successfully");
    } catch (error) {
        sendResponse(res, 500, error.message);
    }
};

// User signup
export const signup = async (req, res) => {
    try {
        const { name, email, password, phoneNumber, dateOfBirth } = req.body;

        // Validate required fields
        if (!name || !email || !password) return sendResponse(res, 400, "Name, email, and password are required");

        // Check if the user already exists
        const signupExist = await Signup.findOne({ email });
        if (signupExist) return sendResponse(res, 400, "User already exists");

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save to the signup model
        const newSignupUser = new Signup({ name, email, password: hashedPassword, phoneNumber, dateOfBirth });
        await newSignupUser.save();

        // Save to the user model
        const newUser = new User({
            name,
            email,
            address: req.body.address || "Default Address",
        });
        await newUser.save();

        sendResponse(res, 201, "User signed up successfully", { email });
    } catch (error) {
        sendResponse(res, 500, error.message);
    }
};

// Login function

export const login = async (req, res) => {
    try {
        const { email, password } = req.query; // Extract query parameters

        // Step 1: Validate inputs
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // Step 2: Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User does not exist" });
        }

        // Step 3: Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }

        // Step 4: Return success response
        res.status(200).json({ message: "Login successful", user: { email: user.email, id: user._id } });
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

