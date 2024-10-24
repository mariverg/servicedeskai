// src/pages/AdminPanel.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, createUser, createOffice } from '../redux/actions/adminActions';

const AdminPanel = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const [newUser, setNewUser] = useState('');
    const [newOffice, setNewOffice] = useState('');

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleCreateUser = () => {
        dispatch(createUser(newUser));
    };

    const handleCreateOffice = () => {
        dispatch(createOffice(newOffice));
    };

    return (
        <div className="admin-panel-container">
            <h2>Admin Panel</h2>
            <div>
                <h3>Users</h3>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.email}</li>
                    ))}
                </ul>
                <input 
                    type="text" 
                    placeholder="New User Email" 
                    value={newUser} 
                    onChange={(e) => setNewUser(e.target.value)} 
                />
                <button onClick={handleCreateUser}>Create User</button>
            </div>
            <div>
                <h3>Offices</h3>
                <input 
                    type="text" 
                    placeholder="New Office Name" 
                    value={newOffice} 
                    onChange={(e) => setNewOffice(e.target.value)} 
                />
                <button onClick={handleCreateOffice}>Create Office</button>
            </div>
        </div>
    );
};

export default AdminPanel;
