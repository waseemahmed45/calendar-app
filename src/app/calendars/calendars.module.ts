import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarsRoutingModule } from './calendars-routing.module';
import { CalendarsComponent} from './calendars.component';
import { ChunkPipe } from '../utils/chunk-pipe';


@NgModule({
  declarations: [ChunkPipe,
    CalendarsComponent
  ],
  imports: [
    CommonModule,
    CalendarsRoutingModule
  ]
})
export class CalendarsModule { }
