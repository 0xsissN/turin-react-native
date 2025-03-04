import { Ticket } from "../types";

export class TicketVIP implements Ticket {
  type: string = "VIP";
  price: number = 100;

  details(): string {
    return `Ticket ${this.type} - Precio: Bs${this.price}`;
  }
}

export class TicketGeneral implements Ticket {
  type: string = "GENERAL";
  price: number = 50;

  details(): string {
    return `Ticket ${this.type} - Precio: Bs${this.price}`;
  }
}

export class TicketFactory {
  createTicket(type: string): Ticket {
    switch (type) {
      case "VIP":
        return new TicketVIP();
      case "GENERAL":
        return new TicketGeneral();
      default:
        throw new Error("Ticket dont exist");
    }
  }
}
