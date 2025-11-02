import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  @Output() filterEvent = new EventEmitter<string>();
  categories = [
    'Tunis',
    'Ariana',
    'Ben Arous',
    'Manouba',
    'La Marsa',
    'Carthage',
    'Le Bardo',
    'La Goulette',
    'Marsa',
    'Ezzahra',
    'Radès',
  ];
  filterByCategory(category: string) {
    this.filterEvent.emit(category);
  }
}
