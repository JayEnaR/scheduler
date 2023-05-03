import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MonthPickerComponent } from './month-picker/month-picker.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SchedulerComponent } from './scheduler/scheduler.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NewEventComponent } from './new-event/new-event.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MonthPickerComponent,
    SchedulerComponent,
    NewEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
