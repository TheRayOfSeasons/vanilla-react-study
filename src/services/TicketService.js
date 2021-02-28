const TICKETS = [
  {
    id: 1,
    seat: 'A1',
    type: {
      id: 1,
      name: 'Wow',
      discount: 0.25
    },
    price: 200,
    subtotal: 200
  },
  {
    id: 2,
    seat: 'A2',
    type: {
      id: 2,
      name: 'Comfy'
    },
    price: 200,
    subtotal: 200
  },
  {
    id: 3,
    seat: 'A3',
    type: {
      id: 3,
      name: 'Coconut'
    },
    price: 200,
    subtotal: 200
  }
];

const TYPES = [
  {
    id: 1,
    name: 'Wow',
    discount: 0.25
  },
  {
    id: 2,
    name: 'Comfy'
  },
  {
    id: 3,
    name: 'Coconut',
    discount: 1
  },
]


export class TicketService
{
  static getTicket()
  {

  }

  static getTickets()
  {
    return TICKETS;
  }

  static getTypes()
  {
    return TYPES;
  }
}
