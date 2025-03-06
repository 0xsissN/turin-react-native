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
  event: Event
  details(): string
}

export interface Observer{
  update(ticket: Ticket): void
}

export interface IObserver{
  addObserver(obs: Observer): void
  notifiObservers(ticket: Ticket): void
}