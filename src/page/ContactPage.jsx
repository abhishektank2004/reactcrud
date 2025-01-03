import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link for navigation

function ContactPage() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/contacts/allContacts");
                setContacts(response.data.data || []); // Handle cases where data might be undefined
                setLoading(false);
            } catch (error) {
                console.error("Error fetching contacts:", error);
                setLoading(false);
            }
        };
        fetchContacts();
    }, []);

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between mb-3">
                <h2>All Contacts</h2>
                <Link to="/AddContactPage" className="btn btn-primary">Add New Contact</Link> {/* Button at the top-right */}
            </div>
            
            {loading ? (
                <div>Loading...</div>
            ) : contacts.length === 0 ? (
                <div>
                    <p>No contacts found.</p>
                </div>
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact, index) => (
                            <tr key={contact._id}>
                                <td>{index + 1}</td>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.subject}</td>
                                <td>{contact.comment || "No comment provided"}</td> {/* Fallback for empty comments */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ContactPage;
