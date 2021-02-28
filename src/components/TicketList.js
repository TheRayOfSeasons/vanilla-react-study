import React, { useState, useEffect } from 'react';

import { TicketRow } from './TicketRow';

export const TicketList = ({ tickets, types }) => {
  const [currentTickets, setCurrentTickets] = useState(tickets);
  const onTicketChange = ticket => {
    const currentTicketsCopy = [...currentTickets];
    for(const i in currentTicketsCopy)
    {
      if(currentTicketsCopy[i].id === ticket.id)
      {
        currentTicketsCopy[i] = ticket;
        break;
      }
    }
    setCurrentTickets(currentTicketsCopy);
  }
  useEffect(() => {
    console.log(currentTickets);
  }, [currentTickets]);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Remove</th>
            <th>Seat #</th>
            <th>Ticket Type</th>
            <th>Snack Bundle</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {currentTickets.map(({ id, seat, type, price, subtotal }) =>
            <TicketRow
              onTicketRowUpdate={ticket => onTicketChange(ticket)}
              id={id}
              seat={seat}
              type={type}
              types={types}
              price={price}
              subtotal={subtotal}
              />
          )}
        </tbody>
        <tfoot>
          <tr>
            <th className="tr" colSpan={4}>Total</th>
            <th>
              {tickets.reduce((accumulator, { subtotal }) => accumulator + subtotal, 0)}
            </th>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
