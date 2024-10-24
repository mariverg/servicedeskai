// src/pages/ServiceDesk.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTickets, updateTicketStatus } from '../redux/actions/ticketActions';

const ServiceDesk = () => {
    const dispatch = useDispatch();
    const tickets = useSelector(state => state.allTickets);

    useEffect(() => {
        dispatch(fetchAllTickets());
    }, [dispatch]);

    const handleUpdateStatus = (id, newStatus) => {
        dispatch(updateTicketStatus(id, newStatus));
    };

    return (
        <div className="service-desk-container">
            <h2>Manage Tickets</h2>
            <ul>
                {tickets.map(ticket => (
                    <li key={ticket.id}>
                        <h4>{ticket.description}</h4>
                        <p>Status: {ticket.status}</p>
                        <button onClick={() => handleUpdateStatus(ticket.id, 'In Progress')}>In Progress</button>
                        <button onClick={() => handleUpdateStatus(ticket.id, 'Closed')}>Close</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceDesk;
