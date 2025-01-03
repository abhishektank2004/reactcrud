import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AddContact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        comment: "" // Fixed to match common casing
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8000/api/contacts/addContact",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json", // Explicitly set headers
                    },
                }
            );
            alert(response.data.message || "Contact added successfully");
            // Clear the form fields after successful submission
            setFormData({ name: "", email: "", subject: "", comment: "" });
        } catch (error) {
            // Enhanced error handling
            if (error.response) {
                console.error("Server error:", error.response.data);
                alert(`Error: ${error.response.data.message || "Failed to add contact"}`);
            } else if (error.request) {
                console.error("No response received:", error.request);
                alert("No response from the server. Check API connection.");
            } else {
                console.error("Request setup error:", error.message);
                alert("Error setting up the request. Check console for details.");
            }
        }
    };

    return (
        <div className="container mt-5">
            <h2>Add Contact</h2>
            <Link to="/ContactPage">Back</Link>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="comment" className="form-label">Comment</label>
                    <textarea
                        className="form-control"
                        id="comment"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add Contact</button>
            </form>
            <br />
        </div>
    );
}

export default AddContact;
