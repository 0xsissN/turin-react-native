import { Observer, Ticket } from "../types";

export class Stadistics implements Observer {
  private ticketSells: Ticket[] = [];
  
  update(ticket: Ticket): void {
    this.ticketSells.push(ticket);
  }

  getTotalTickets(): number {
    return this.ticketSells.length;
  }

  getTicketsSells(): Ticket[] {
    return this.ticketSells;
  }
}
