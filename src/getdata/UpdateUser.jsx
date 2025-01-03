import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateUser() {
    const { id } = useParams(); // Get the user ID from the URL
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: ''
    });

    useEffect(() => {
        // Fetch user data for the given ID
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/users/${id}`);
                console.log('API Response:', response.data); // Debugging log
                setFormData({
                    name: response.data.name || '',
                    email: response.data.email || '',
                    address: response.data.address || ''            
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
                alert('Failed to fetch user data.');
            }
        };
        
        fetchUserData();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/api/users/${id}`, formData);
            alert('User updated successfully!');
            navigate('/UserData'); // Redirect back to the Users page
        } catch (error) {
            console.error('Error updating user:', error);
            alert('Failed to update user.');
        }
    };

    return (
        <div className="container mt-5 p-4 bg-light border rounded shadow-sm">
            <h2 className="text-primary">Update User</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Update User
                </button>
                <button type="button" onClick={() => navigate('/UserData')} className="btn btn-secondary ms-2">
                    Cancel
                </button>
            </form>
        </div>
    );
}

export default UpdateUser;
