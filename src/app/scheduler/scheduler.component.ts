import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { IEvent } from '../../models/calendar-day.model';
import { SchedulerService } from "../../services/scheduler/scheduler.service";

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {

  date: string | Date = new Date();
  events: IEvent[] = [];
  @ViewChild('drawer') drawer!: MatSidenav;
  
  constructor(private _schedulerService: SchedulerService) { }

  ngOnInit(): void {
    // Listen for edit/new events
    this._schedulerService.editEvent$.subscribe(events => {
      this.events = events;
      this.drawer.open();
    });
    this._schedulerService.newEvent$.subscribe(date => {
      // TODO: add new event functionality
      this.drawer.open();
    });
  }

}
