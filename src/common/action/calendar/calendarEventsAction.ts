import { Types } from "../../constant/types";
import { CalendarEventsEntity, CalendarEventsActionEntity } from "../../model";

export const getCalendarEventsSuccess = (result: CalendarEventsEntity[]): CalendarEventsActionEntity => ({
    type: Types.GET_EVENTS_SUCCESS,
    payload: result,
    error: ""
});
  
export const getCalendarEventsFailure = (): CalendarEventsActionEntity => ({
    type: Types.GET_EVENTS_FAILURE,
    payload: [],
    error: "Something went wrong! Please try again later!"
});

export const getCalendarEvents = () => async (dispatch: any) => {
    setTimeout(()=> {
        const events:CalendarEventsEntity[] = [
            { title: 'Conference', date: '2020-07-01'},
            { title: 'Meeting', date: '2020-07-01' + 'T14:00:00'},
            { title: 'Birthday Party', date: '2020-07-04'},
            { title: 'StandUp Meet', date: '2020-07-06'},
            { title: 'Scrum Discussion', date: '2020-07-09'},
            { title: 'Conference', date: '2020-07-09' + 'T12:00:00'},
            { title: 'Meeting', date: '2020-07-12'},
            { title: 'Conference', date: '2020-07-14'},
            { title: 'Conference', date: '2020-07-14'+ 'T12:00:00'},
            { title: 'Lunch Meet', date: '2020-07-16' + 'T12:00:00'},
            { title: 'Training', date: '2020-07-18'},
            { title: 'Training', date: '2020-07-19'},
            { title: 'Lunch Meet', date: '2020-07-19' + 'T12:00:00'},
            { title: 'Meeting', date: '2020-07-25'},
            { title: 'Conference', date: '2020-07-30'}
        ]
        
        dispatch(getCalendarEventsSuccess(events))
    }, 1000);
}
