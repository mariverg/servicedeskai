// src/pages/TicketHistory.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTickets } from '../redux/actions/ticketActions';

const TicketHistory = () => {
    const dispatch = useDispatch();
    const tickets = useSelector(state => state.tickets);

    useEffect(() => {
        dispatch(fetchTickets());
    }, [dispatch]);

    return (
        <div className="ticket-history-container">
            <h2>Your Tickets</h2>
            <ul>
                {tickets.map(ticket => (
                    <li key={ticket.id}>
                        <h4>{ticket.description}</h4>
                        <p>Status: {ticket.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TicketHistory;
