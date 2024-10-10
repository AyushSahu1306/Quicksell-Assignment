import React from 'react';

const TicketColumn = ({ title, tickets,users,sortBy }) => {

    const PRIORITY_KEYS = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
    const getName=(name)=>{
            const nameParts = name.split(" ");
            const firstLetter = nameParts[0] ? nameParts[0][0] : "";
            const secondLetter = nameParts[1] ? nameParts[1][0] : "";
            const initials = firstLetter + secondLetter;
        
            return initials.toUpperCase();          
    }

    const sortTickets = (tickets, sortBy) => {
        return tickets.sort((a, b) => {
          if (sortBy === "priority") {
            const priorityA = PRIORITY_KEYS.indexOf(a.priority);
            const priorityB = PRIORITY_KEYS.indexOf(b.priority);
            return priorityA - priorityB; 
          } else if (sortBy === "title") {
            
            return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
          }
          return 0; 
        });
      };

    sortTickets(tickets,sortBy);

  return (
    <div className="ticket-column">
      <h3>{title}</h3>
      <div className="ticket-list">
        {tickets.map((ticket, index) => (
            <div key={index} className="ticket">
                <div className='head'>
                    <p> {ticket.id}</p>
                    <p className='icon'> {
                      getName(users.find((user)=>user.id==ticket.userId).name)
                    }
                    </p>
                </div>
            <p><strong>{ticket.title}</strong></p>
            <span className='tag'>{ticket.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketColumn;
