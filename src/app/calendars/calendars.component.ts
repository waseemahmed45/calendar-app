import { Component, OnInit } from '@angular/core';
import { CalendarDay } from '../utils/calendar-day';

@Component({
  selector: 'app-calendars',
  templateUrl: './calendars.component.html',
  styleUrls: ['./calendars.component.scss', './calendars2.component.scss']
})
export class CalendarsComponent implements OnInit {

  public calendar: CalendarDay[] = []; 
  public currentDate: Date = new Date();
  public monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  public dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


  constructor() { 

    this.generateCalendarDays();

  }

  outOfCurrentMonth (c: Date): boolean
  {
    return (c.getMonth() !== (new Date()).getMonth())
  }

  ngOnInit(): void {
  }

  private generateCalendarDays(): void {
    // we reset our calendar every time
    this.calendar = [];

    // we set the date 
    let day: Date = new Date();

    // here we find the first day that our calendar will start from
    // it would be the last Monday of the previous month
    let startingDateOfCalendar = this.getStartDateForCalendar(day);

    // dateToAdd is an intermediate variable that will get increased
    // in the following for loop
    let dateToAdd = startingDateOfCalendar;

    // ok since we have our starting date then we get the next 41 days 
    // that we need to add in our calendar array
    // 41 cause our calendar will show 6 weeks and MATH say that
    // 6 weeks * 7 days = 42!!
    for (var i = 0; i < 42; i++) {
      this.calendar.push(new CalendarDay(new Date(dateToAdd)));
      dateToAdd = new Date(dateToAdd.setDate(dateToAdd.getDate() + 1));
    }
  }

  private getStartDateForCalendar(selectedDate: Date){
    // for the day we selected let's get the previous month last day
    let lastDayOfPreviousMonth = new Date(selectedDate.setDate(0));

    // start by setting the starting date of the calendar same as the last day of previous month
    let startingDateOfCalendar: Date = lastDayOfPreviousMonth;

    // but since we actually want to find the last Monday of previous month
    // we will start going back in days intil we encounter our last Monday of previous month
    if (startingDateOfCalendar.getDay() != 1) {
      do {
        startingDateOfCalendar = new Date(startingDateOfCalendar.setDate(startingDateOfCalendar.getDate() - 1));
      } while (startingDateOfCalendar.getDay() != 1);
    }

    return startingDateOfCalendar;
  }

}
