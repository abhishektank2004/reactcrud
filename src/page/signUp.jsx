import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('');
    const navigate = useNavigate(); // useNavigate hook for navigation

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic form validation
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            // Send signup data to your API using axios
            const response = await axios.post('http://localhost:8000/api/auth/signup', {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });

            if (response.status === 200) {
                // On success, navigate to login page
                navigate('/'); // Redirect to login page
            } else {
                // Handle error (if response status is not 200)
                setError(response.data.message || "Signup failed");
            }
        } catch (err) {
            setError("Error occurred while signing up");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2 style={styles.title}>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div style={styles.inputGroup}>
                        <label htmlFor="name" style={styles.label}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label htmlFor="email" style={styles.label}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label htmlFor="password" style={styles.label}>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label htmlFor="confirmPassword" style={styles.label}>Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    {error && <p style={styles.error}>{error}</p>} {/* Display error message */}

                    <div style={styles.buttonContainer}>
                        <button type="submit" style={styles.submitButton}>Sign Up</button>
                    </div>

                    <div style={styles.loginLink}>
                        <p>Already have an account? 
                            <Link to="/" style={styles.link}>Login here</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Inline styles
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
        margin: 0,
        padding: 0,
    },
    formContainer: {
        backgroundColor: 'white',
        padding: '20px 40px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%',
    },
    title: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        fontSize: '14px',
        color: '#555',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '14px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
    },
    buttonContainer: {
        marginBottom: '20px',
    },
    submitButton: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    loginLink: {
        textAlign: 'center',
    },
    link: {
        color: '#007BFF',
        textDecoration: 'none',
    },
    error: {
        color: 'red',
        fontSize: '14px',
        textAlign: 'center',
        marginBottom: '15px',
    }
};

export default SignUp;
