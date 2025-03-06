import { Event, Ticket } from "../types";

export class TicketVIP implements Ticket {
  type: string = "VIP";
  price: number = 100;
  event: Event;
  constructor(event: Event) {
    this.event = event;
  }

  details(): string {
    return `Ticket ${this.type} - Precio: Bs${this.price} - Evento: ${this.event.event_name}`;
  }
}

export class TicketGeneral implements Ticket {
  type: string = "GENERAL";
  price: number = 50;
  event: Event;
  constructor(event: Event) {
    this.event = event;
  }

  details(): string {
    return `Ticket ${this.type} - Precio: Bs${this.price} - Evento: ${this.event.event_name}`;
  }
}

export class TicketFactory {
  createTicket(type: string, event: Event): Ticket {
    switch (type) {
      case "VIP":
        return new TicketVIP(event);
      case "GENERAL":
        return new TicketGeneral(event);
      default:
        throw new Error("Ticket dont exist");
    }
  }
}
