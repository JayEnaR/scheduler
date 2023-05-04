import { Component, OnInit } from '@angular/core';
import { weekdays } from "../../models/week-days.data";
import { DecimalRounder } from "../../helpers/decimal.round";
import { ICalendar, IDay, IEvent } from "../../models/calendar-day.model";
import { SchedulerService } from "../../services/scheduler/scheduler.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendar: ICalendar = {
    weeks: []
  };
  weekdays: string[] = weekdays;
  year: number;
  month: number;
  currentDay: number;

  constructor(private _schedulerService: SchedulerService) {
    this.year = new Date().getFullYear();
    this.month = new Date().getMonth() + 1;
    this.currentDay = new Date().getDay();
  }

  ngOnInit(): void {

    this.createCalendar();
    // Subscribe to date changes
    this._schedulerService.dateChange$.subscribe(date => {
      if (typeof date === 'string') {
        this.year = +date.split('-')[0];
        this.month = +date.split('-')[1];
      }
      else {
        // Handle date formating
      }
      this.calendar = {
        weeks: []
      };
      this.currentDay = this.month == new Date().getMonth() + 1 ? new Date().getDay(): -1 ;
      this.createCalendar();
    });
  }

  private createCalendar(): void {
    const daysInMonth = new Date(this.year, this.month, 0).getDate();
    let firstWeekDayStartIndex = new Date(this.year, this.month - 1, 1).getDay();
    let weeks = DecimalRounder.roundNum(daysInMonth / 7, 0);
    const lastWeekDaysLeng = new Date(this.year, this.month, 1).getDay();
    // If the first week's partial days + last weeks partial days >= 7 then subtract a week
    if ((7 - firstWeekDayStartIndex) + lastWeekDaysLeng >= 7) {
      weeks -= 1;
    }
    const leadingDays: number = firstWeekDayStartIndex;
    const trailingDays: number = 7 - lastWeekDaysLeng;
    let daysPerWeek = 7;
    let day = 1;

    // If its not the first day of the week there will be another partial week
    if (firstWeekDayStartIndex != 0) {
      weeks += 1;
    }
    // A remainder means there will be a partial week
    if (daysInMonth % 7 > 0) {
      weeks += 1;
    }

    for (let w = 0; w != weeks; w++) {
      this.calendar.weeks.push({
        days: []
      });
      for (let d = firstWeekDayStartIndex; d != daysPerWeek; d++) {
        this.calendar.weeks[w].days!.push({
          isDayInMonth: true,
          dayName: this.weekdays[d],
          dayNumber: day,
          events: [{
            title: "some title",
            description: `Event on day: ${day}`,
            time: "some time"
          }]
        });
        day++
      }
      firstWeekDayStartIndex = 0;
      // When its the last week
      if (w == (weeks - 2)) {
        daysPerWeek = lastWeekDaysLeng;
      }
    }

    // Prepend the days not in the current month
    if (leadingDays > 0) {
      let leadingCalendarItems: IDay[] = [];
      let prevMonthDays = (new Date(this.year, this.month - 1, 0).getDate() + 1) - leadingDays;
      for (let ld = 0; ld != leadingDays; ld++) {
        leadingCalendarItems.push({
          isDayInMonth: false,
          dayName: this.weekdays[ld],
          dayNumber: prevMonthDays
        });
        prevMonthDays++;
      }
      this.calendar.weeks[0].days = [...leadingCalendarItems, ...this.calendar.weeks[0].days!]
    }

    // Append the days not in the current month
    if (trailingDays > 0) {
      let trailingCalendarItems: IDay[] = [];
      for (let td = 0; td != trailingDays; td++) {
        trailingCalendarItems.push({
          isDayInMonth: false,
          dayName: this.weekdays[lastWeekDaysLeng + td],
          dayNumber: td + 1
        });
      }
      this.calendar.weeks[weeks - 1].days!.push.apply(this.calendar.weeks[weeks - 1].days!, trailingCalendarItems);
    }

    // Add the last week which is typically not part of the month
    if (weeks < 6) {
      this.calendar.weeks.push({
        days: []
      });
      let trailingWeek: IDay[] = [];
      for (let td = 0; td != 7; td++) {
        trailingWeek.push({
          isDayInMonth: false,
          dayName: this.weekdays[td],
          dayNumber: trailingDays + 1 + td
        });
      }
      this.calendar.weeks[weeks].days!.push.apply(this.calendar.weeks[weeks].days!, trailingWeek);
    }
  }

  on_EditEvent(weekIndex: number, dayIndex: number): void {
    alert(`NOTE: If no event exists, it will open the panel to add a new one. \nIf it does exist, it will open a form to edit it.`);
    const events: IEvent[] = this.calendar.weeks[weekIndex].days![dayIndex].events!;
    if (events && events.length > 0) {
      this._schedulerService.on_EditEvent(events);
    }
    else {
      this.on_NewEvent(dayIndex);
    }
  }

  on_NewEvent(dayIndex: number): void {
    const date = new Date(this.year, this.month, dayIndex + 1);
    this._schedulerService.on_NewEvent(date);
  }
}
