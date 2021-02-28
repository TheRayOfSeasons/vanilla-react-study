import React from 'react';
import { TypeSelector } from './TypeSelector';

export const TicketRow = ({ id, seat, type, types, price, subtotal, onTypeChange }) => {
  const emitTypeChange = type => {
    onTypeChange({ type, seat });
  }
  return (
    <tr>
      <td><button className="pa3 br2 bg-light-red bn-l ma2 white shadow-2">X</button></td>
      <td>{seat}</td>
      <td>
        <TypeSelector types={types} defaultValue={type} onSelect={emitTypeChange}/>
      </td>
      <td>
        <button className="pa3 br2 bg-green bn-l ma2 white shadow-2">Snack Bundle</button>
      </td>
      <td>{subtotal}</td>
    </tr>
  );
}
