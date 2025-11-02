import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ListEventComponent } from './list-event/list-event.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { DetailEventComponent } from './detail-event/detail-event.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { DataEventService } from '../../shared/services/data-event.service';
import { CardEventComponent } from './card-event/card-event.component';
import { FormsModule, ɵInternalFormsSharedModule } from '@angular/forms';

@NgModule({
  declarations: [
    EventsComponent,
    ListEventComponent,
    DetailEventComponent,
    SideBarComponent,
    CardEventComponent,
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    RouterModule,
    FormsModule,
    ɵInternalFormsSharedModule,
  ],
  exports: [ListEventComponent, DetailEventComponent, SideBarComponent],
  //providers[DataEventService]
})
export class EventsModule {}
