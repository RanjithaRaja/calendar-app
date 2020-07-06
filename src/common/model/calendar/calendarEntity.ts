import { CalendarEventsEntity } from "../";

export interface CalendarEntity {
    error: string;
    payload: CalendarEventsEntity[] | [];
}