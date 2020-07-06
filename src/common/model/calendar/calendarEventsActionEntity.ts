import { CalendarEventsEntity } from "../";

export interface CalendarEventsActionEntity {
    type: string;
    payload: CalendarEventsEntity[] | [];
    error: string;
}