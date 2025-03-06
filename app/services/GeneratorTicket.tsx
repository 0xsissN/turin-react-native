import { TicketFactory } from "../patterns/TicketFactory";
import { IObserver, Observer, Ticket, Event } from "../types";

export class GeneratorTicket implements IObserver {
  private obs: Observer[] = [];

  addObserver(obs: Observer) {
    this.obs.push(obs);
  }

  notifiObservers(ticket: Ticket) {
    for (const o of this.obs) {
      o.update(ticket);
    }
  }

  createTicket(type: string, event: Event): Ticket {
    const factory = new TicketFactory();
    const ticket = factory.createTicket(type, event);
    this.notifiObservers(ticket);
    return ticket;
  }
}
