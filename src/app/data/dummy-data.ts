import { ICalendar } from "../models/calendar-day.model";

export const dummyCalendarData: ICalendar = {
    weeks: [
      {
        days: [
          {
            dayName: "Monday",
            dayNumber: 3,
            date: new Date(2023, 4, 1), // May 1st, 2023
            events: [
              {
                title: "Meeting with John",
                description: "Discuss project progress",
                time: "10:00 AM"
              },
              {
                title: "Lunch with Sarah",
                description: "Try out new restaurant",
                time: "12:30 PM"
              }
            ],
            isDayInMonth: true
          },
          {
            dayName: "Tuesday",
            dayNumber: 4,
            date: new Date(2023, 4, 2), // May 2nd, 2023
            events: [
              {
                title: "Doctor's appointment",
                description: "Annual check-up",
                time: "3:00 PM"
              }
            ],
            isDayInMonth: true
          },
          {
            dayName: "Wednesday",
            dayNumber: 5,
            isDayInMonth: false
          },
          {
            dayName: "Thursday",
            dayNumber: 6,
            isDayInMonth: false
          },
          {
            dayName: "Friday",
            dayNumber: 7,
            date: new Date(2023, 4, 7), // May 7th, 2023
            events: [
              {
                title: "Team building activity",
                description: "Escape room challenge",
                time: "2:00 PM"
              }
            ],
            isDayInMonth: true
          },
          {
            dayName: "Saturday",
            dayNumber: 8,
            isDayInMonth: false
          },
          {
            dayName: "Sunday",
            dayNumber: 9,
            isDayInMonth: false
          }
        ]
      },
      // More weeks can be added here
    ]
  };
  