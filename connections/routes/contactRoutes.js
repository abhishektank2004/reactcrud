import express from "express";
import Contact from "../model/ContactsModel.js";  // Importing the correct Contact model

const router = express.Router();

// Add a new contact
router.post('/addContact', async (req, res) => {
    const { name, email, subject, comment } = req.body;

    // Check if all required fields are present
    if (!name || !email || !subject || !comment) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Create a new contact document
        const newContact = new Contact({
            name,
            email,
            subject,
            comment
        });

        // Save the contact to the database
        await newContact.save();

        // Send a success response
        res.status(200).json({ message: 'Contact added successfully' });

    } catch (error) {
        console.error("Error adding contact:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

// Get all contacts
router.get("/allContacts", async (req, res) => {
    try {
        const contacts = await Contact.find(); // Assuming 'Contact' is the model you're using
        res.status(200).json({ message: "Contacts retrieved successfully", data: contacts });
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch contacts", error: error.message });
    }
});

export default router;
