import express from "express";
import {
    create,
    deleteUser,
    getAllUser,
    getUserById,
    updateUserById,
} from "../controller/userController.js";

import { validateUser } from "../middleware/validationMiddleware.js";

const router = express.Router();

// User Routes
router.post("/users", validateUser, create); // Endpoint for creating a new user
router.get("/users", getAllUser); // Endpoint for fetching all users
router.get("/users/:id", getUserById); // Endpoint for fetching a user by ID
router.put("/users/:id", validateUser, updateUserById); // Endpoint for updating a user by ID
router.delete("/users/:id", deleteUser); // Endpoint for deleting a user by ID

export default router;
