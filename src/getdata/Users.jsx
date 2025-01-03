import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/users');
                console.log('Fetched users:', response.data); // Log the response to check the structure of data
                if (Array.isArray(response.data.data)) {
                    setUsers(response.data.data); // Adjust to your API's structure
                } else {
                    console.error('Expected an array but got:', response.data.data);
                }
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const deleteUser = async (userId) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await axios.delete(`http://localhost:8000/api/users/${userId}`);
                setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
                alert('User deleted successfully!');
            } catch (error) {
                console.error(error);
                alert('Failed to delete user.');
            }
        }
    };

    return (
        <div className="container mt-5 p-4 bg-light border rounded shadow-sm" style={{ width: '80%' }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-primary">User Management</h2>
                <Link to="/AddNewUser" className="btn btn-primary">
                    <i className="fa-solid fa-user-plus"></i> Add User
                </Link>
            </div>

            {loading ? (
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : users.length === 0 ? (
                <div className="alert alert-info" role="alert">
                    <h5>Create New User</h5>
                    No users found
                </div>
            ) : (
                <table className="table table-striped table-hover">
                    <thead className="table-primary">
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th colSpan="2" className="text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>
                                    <Link to={`/UpdateUser/${user._id}`} className="btn btn-sm btn-primary">
                                        <i className="fa-solid fa-pen-to-square"></i> Update
                                    </Link>
                                </td>
                                <td>
                                    <Link
                                        onClick={() => deleteUser(user._id)}
                                        className="btn btn-sm btn-danger">
                                        <i className="fa-solid fa-trash"></i> Delete
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Users;
