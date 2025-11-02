import { Component, OnInit } from '@angular/core';
import { Eventy } from '../../../../models/event';
import { DataEventService } from '../../../shared/services/data-event.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css'],
})
export class ListEventComponent implements OnInit {
  list: Eventy[];

  constructor(private dataService: DataEventService) {}

  ngOnInit() {
    this.list = this.dataService.getAllEvents();
  }

  // 🟦 Méthode pour "Like"
  likeEvent(event: Eventy) {
    event.nbrLikes++;
  }

  // 🟩 Méthode pour "Reserved"
  reserveEvent(event: Eventy) {
    if (event.nbrPlaces > 0) {
      event.nbrPlaces--;
      alert('✅ Réservation confirmée !');
    } else {
      alert('❌ Plus de places disponibles.');
    }
  }
}
