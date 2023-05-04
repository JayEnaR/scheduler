import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IEvent } from 'src/app/models/calendar-day.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private eventSrc: BehaviorSubject<IEvent> = new BehaviorSubject<IEvent>({} as IEvent);
  event$ = this.eventSrc.asObservable();

  constructor() { }

  addEvent(event: IEvent): void {
    this.eventSrc.next(event);
  }

}
