import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../../models/ticket';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css'], // ✅ pluriel
})
export class ListTicketComponent implements OnInit {
  title: string = 'Mes Tickets';
  tickets: Ticket[] = [];
  searchId: string = ''; // champ pour recherche

  constructor() {}

  ngOnInit() {
    this.tickets = [
      {
        id: 1,
        price: 12,
        eventId: 420,
        userId: 69,
        date: new Date(),
        valid: true,
      },
      {
        id: 2,
        price: 20,
        eventId: 421,
        userId: 69,
        date: new Date(),
        valid: false,
      },
      {
        id: 3,
        price: 25,
        eventId: 422,
        userId: 70,
        date: new Date(),
        valid: true,
      },
    ];
  }

  // ✅ Fonction de filtrage
  get filteredTickets(): Ticket[] {
    if (!this.searchId.trim()) {
      return this.tickets; // champ vide => tous les tickets
    }
    const idNumber = Number(this.searchId); // conversion en nombre
    return this.tickets.filter((t) => t.id === idNumber);
  }

  validerTicket(ticket: Ticket) {
    ticket.valid = true;
  }
}
