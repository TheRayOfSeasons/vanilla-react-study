import React from 'react';
import { TicketService } from '../services/TicketService';

export const TypeSelector = ({ types, defaultValue, onSelect }) => {
  const emitSelected = id => {
    onSelect(types.find(_type => _type.id === parseInt(id)));
  }
  return (
    <>
      <select onChange={event => emitSelected(event.currentTarget.value)}>
        {types.map(({ id, name }) => 
          <option
            value={id}
            selected={defaultValue.id === id}
          >
            {name}
          </option>
        )}
      </select>
    </>
  )
}