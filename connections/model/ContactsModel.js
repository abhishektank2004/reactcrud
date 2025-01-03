import mongoose from "mongoose";

// Define the schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    subject: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Create and export the model
const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
