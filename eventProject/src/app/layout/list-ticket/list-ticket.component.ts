import { Component } from '@angular/core';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrl: './list-ticket.component.css',
})
export class ListTicketComponent {
  title: string;
  constructor() {}
  ngOnInit() {
    this.title = 'HELLO WORLD';
  }
}
