import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { DetailEventComponent } from './detail-event/detail-event.component';
import { ListEventComponent } from './list-event/list-event.component';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    children: [
      { path: '', component: ListEventComponent },
      { path: 'detail-event/:id', component: DetailEventComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
