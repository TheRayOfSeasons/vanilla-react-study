import React from 'react';

import { TicketRow } from './Ticket';

export const TicketList = ({ tickets, types }) => {
  const onTypeChange = ({ type, seat }) => {
    console.log(type);
    console.log(seat);
  }
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
          {tickets.map(({ id, seat, type, price, subtotal }) =>
            <TicketRow
              id={id}
              seat={seat}
              type={type}
              types={types}
              price={price}
              subtotal={subtotal}
              onTypeChange={onTypeChange}
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