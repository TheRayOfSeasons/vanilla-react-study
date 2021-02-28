import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'tachyons/css/tachyons.min.css';

import { TicketList } from './components/TicketList';
import { TicketService } from './services/TicketService';

export function App() {
  const [count, setCount] = useState(0);
  const tickets = TicketService.getTickets();
  const types = TicketService.getTypes();
  return (
    <>
      <div className="mb7">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </div>
      <TicketList tickets={tickets} types={types}/>
    </>
  );
}
