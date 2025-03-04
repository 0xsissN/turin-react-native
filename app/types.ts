export interface Event {
  event_name: string;
  date: string;
  price: string;
  image_url: string;
  description: string;
  id: number;
}

export interface EventAdmin {
  event: Event;
  onDelete: (id: number) => void;
}

export interface EventUser {
  event: Event
}

export interface Ticket{
  type: string
  price: number
  details(): string
}

export interface Observer{
  update(ticket: Ticket): void
}