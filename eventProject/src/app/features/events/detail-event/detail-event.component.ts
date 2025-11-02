import { Component, OnInit } from '@angular/core';
import { DataEventService } from '../../../shared/services/data-event.service';
import { ActivatedRoute } from '@angular/router';
import { Eventy } from '../../../../models/event';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrl: './detail-event.component.css',
})
export class DetailEventComponent implements OnInit {
  event?: Eventy;
  //fech if from url ==> object with this id
  //fetch listEvent
  constructor(
    private currentRoute: ActivatedRoute,
    private dataService: DataEventService
  ) {}
  ngOnInit(): void {
    console.log(this.currentRoute.snapshot.params['id']);
  }
}
