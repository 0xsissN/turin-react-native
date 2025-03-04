import { TicketFactory } from "../patterns/TicketFactory";
import { Observer, Ticket } from "../types";

export class GeneratorTicket {
  private obs: Observer[] = [];

  addObserver(obs: Observer) {
    this.obs.push(obs);
  }

  private notifiObservers(ticket: Ticket) {
    for (const o of this.obs) {
      o.update(ticket);
    }
  }

  createTicket(type: string): Ticket {
    const factory = new TicketFactory();
    const ticket = factory.createTicket(type);
    this.notifiObservers(ticket);
    return ticket;
  }
}
