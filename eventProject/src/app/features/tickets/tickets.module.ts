import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { FormsModule } from '@angular/forms';
import { ListTicketComponent } from './list-ticket/list-ticket.component';

@NgModule({
  declarations: [TicketsComponent, ListTicketComponent],
  imports: [CommonModule, TicketsRoutingModule, FormsModule],
})
export class TicketsModule {}
