export interface ICalendar {
    weeks: IWeek[];
}

export interface IWeek{
    days?: IDay[];
}

export interface IDay{
    dayName: string;
    dayNumber: number;
    date?: Date;
    events?: IEvent[];
    isDayInMonth: boolean;
}

export interface IEvent {
    title: string;
    description: string;
    time: string;
}