import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent implements OnInit {

  newEventForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { 
    this.newEventForm = this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): FormGroup {
    return this._formBuilder.group({
      title: [],
      description: [],
      hour: [],
      minute: []
    });
  }

  on_HourChange(hour: any): void {

  }

  on_MinutesChange(minutes: any): void {

  }

  saveEvent(): void {
    
  }

}
