export class CalendarDay {
    public date: Date;
    public title: string | undefined;
    public isPastDate: boolean;
    public isToday: boolean;
  
    constructor(d: Date) {
      this.date = d;
      this.isPastDate = d.setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0);
      this.isToday = d.setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0);
    }
  
  }