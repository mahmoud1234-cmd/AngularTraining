import { Injectable } from '@angular/core';
import { Eventy } from '../../../models/event';

@Injectable({
  providedIn: 'root',
})
export class DataEventService {
  private listEvents: Eventy[] = [
    {
      id: 1,
      title: 'Angular Summit',
      description: 'welcome to our Angular Event',
      price: 50,
      organizerId: 101,
      imageUrl:
        'https://m.media-amazon.com/images/I/71vC4ryHjOL._UF1000,1000_QL80_.jpg',
      nbrPlaces: 25,
      nbrLikes: 0,
      date: new Date('2025-11-10'),
      location: 'Tunis',
    },
    {
      id: 2,
      title: 'Symfony Summit',
      description: 'welcome to our Symfony Event',
      price: 50,
      organizerId: 101,
      imageUrl:
        'https://cdn.dribbble.com/userupload/37287941/file/original-a59d13499667b765fb5aceb8b5d5bf0d.jpg',
      nbrPlaces: 25,
      nbrLikes: 0,
      date: new Date('2025-11-10'),
      location: 'Tunis',
    },
  ];
  constructor() {}
  getAllEvents() {
    return this.listEvents;
  }
  getEventById(id: number): Eventy | undefined {
    return this.listEvents.find((e: Eventy): boolean => e.id === id);
  }
}
