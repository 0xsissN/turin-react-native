export interface Ticket {
  event_name: string;
  date: string;
  price: string;
  image_url: string;
  description: string;
  id: number;
}

export interface TicketAdmin {
  ticket: Ticket;
  onDelete: (id: number) => void;
}

export interface TicketUser {
  ticket: Ticket
}