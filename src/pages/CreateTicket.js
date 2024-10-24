// src/pages/CreateTicket.js
import React, { useState } from 'react';

const CreateTicket = () => {
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [media, setMedia] = useState(null);

    const handleFileUpload = (e) => {
        setMedia(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí se maneja el envío del ticket (a través de una API o lógica Redux)
    };

    return (
        <div className="create-ticket-container">
            <h2>Create a Ticket</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Describe the issue..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input 
                    type="text" 
                    placeholder="Location" 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)} 
                    required 
                />
                <input 
                    type="file" 
                    accept="image/*,video/*" 
                    onChange={handleFileUpload}
                />
                <button type="submit">Submit Ticket</button>
            </form>
        </div>
    );
};

export default CreateTicket;
