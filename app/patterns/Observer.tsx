import { Observer, Ticket } from "../types";

export class Logger implements Observer {
  update(ticket: Ticket): void {
    console.log(`[LOG] Nuevo ticket creado: ${ticket.details()}`);
  }
}

export class Stadistics implements Observer {
  private ticketSells: Ticket[] = [];
  update(ticket: Ticket): void {
    this.ticketSells.push(ticket);
    console.log(
      `[ESTADÍSTICAS] Total tickets vendidos: ${this.ticketSells.length}`
    );
  }

  getTotalTickets(): number {
    return this.ticketSells.length;
  }

  getTicketsSells(): Ticket[] {
    return this.ticketSells;
  }
}
