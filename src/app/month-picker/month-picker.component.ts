import { formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { SchedulerService } from "../../services/scheduler/scheduler.service";
import * as moment from 'moment';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM',
  },
  display: {
    dateInput: 'YYYY-MM',
    monthYearLabel: 'YYYY MMM',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY MMMM',
  },
};

@Component({
  selector: 'app-month-picker',
  templateUrl: './month-picker.component.html',
  styleUrls: ['./month-picker.component.scss']
})
export class MonthPickerComponent implements OnInit {

  dateCtrl = new FormControl(new Date());
  date: string;

  constructor(private _schedulerService: SchedulerService) {
    this.date = new Date().toLocaleString('en-us', { month: 'short', year: 'numeric' })
  }

  ngOnInit(): void {
    const date = formatDate(new Date(), 'yyyy-MM-dd', 'en-ZA');
    // this.date.setValue(new Date())
  }

  chosenYearHandler(normalizedYear: Date) {
  }

  chosenMonthHandler(normalizedMonth: Date, input: any, datepicker: MatDatepicker<Date>) {
    datepicker.close();
    this.date = normalizedMonth.toLocaleString('en-us', { month: 'short', year: 'numeric' });
    const yearMonth: string = formatDate(normalizedMonth, 'yyyy-MM', 'en-US');
    input.value = yearMonth;
    this._schedulerService.on_DateChange(yearMonth);

    console.log(this.dateCtrl);
    console.log(normalizedMonth);

  }

  nextMonth(): void {
    this.navigateDate(true);
  }

  prevMonth(): void {
    this.navigateDate(false);
  }

  navigateDate(forward: boolean): void {
    const current = forward ? new Date(this.date).getMonth() + 1 : new Date(this.date).getMonth() - 1;
    const next = new Date(this.date).setMonth(current);
    this.date = new Date(next).toLocaleString('en-us', { month: 'short', year: 'numeric' });

    const yearMonth: string = formatDate(next, 'yyyy-MM', 'en-US');
    this._schedulerService.on_DateChange(yearMonth);
  }

}
