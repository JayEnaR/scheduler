import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IEvent } from "../models/calendar-day.model";

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  private dateChangeSource: Subject<string|Date> = new Subject<string|Date>();
  dateChange$ = this.dateChangeSource.asObservable();

  private editEventSource: Subject<IEvent[]> = new Subject<IEvent[]>();
  editEvent$ = this.editEventSource.asObservable();

  private newEventSource: Subject<Date> = new Subject<Date>();
  newEvent$ = this.newEventSource.asObservable();

  constructor() { }

  on_DateChange(date: string | Date): void {
    this.dateChangeSource.next(date);
  }

  on_EditEvent(events: IEvent[]): void {
    this.editEventSource.next(events);
  }

  on_NewEvent(date: Date): void {
    this.newEventSource.next(date);
  }
}
