import React from "react";
import { useParams } from "react-router-dom";
import SignUpSection from "../components/SignUpSection";
import ticketPic from "../assets/images/ticketIcon.png"


function Ticket() {
    const tickets = [
        { id: 1, date: "November 22nd, 2025", venue: "Madison Square Garden", location: "New York, NY"},
        { id: 2, date: "November 24th, 2025", venue: "The Anthem", location: "Washington, DC"},
        { id: 3, date: "November 26th, 2025", venue: "Coca-Cola Roxy", location: "Atlanta, GA"},
        { id: 4, date: "November 29th, 2025", venue: "Smart Financial Centre at Sugar Land", location: "Sugar Land, TX"},
        { id: 5, date: "November 30th, 2025", venue: "The Pavilion at Toyota Music Factory", location: "Irving, TX"},
        { id: 5, date: "December 3rd, 2025", venue: "Arizona Financial Theatre", location: "Phoenix, AZ"},
        { id: 5, date: "December 5th, 2025", venue: "The Theater at Bill Graham Civic Auditorium", location: "San Francisco, CA"}
    ]
  return (
    <div className="tickets-page">
    <div className="ticketSection">
        <h1 className="ticket-title">Tickets for the Tour Name are on Sale Now!</h1>
        <div className="ticket-list">
        {tickets.map(ticket => (
          <div className="ticket-card">
            <div className="ticket-info">
                <h2>{ticket.date}</h2>
                <p>{ticket.venue}</p>
                <p>{ticket.location}</p>
            </div>
            <button className="ticket-button">
                <img src={ticketPic} alt="ticket icon" />
                <span>Tickets</span>
            </button>
            </div>
        ))}
      </div>
      
    </div>
    <SignUpSection />
    </div>
  );
}

export default Ticket;