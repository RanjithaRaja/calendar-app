import { Types } from "../../constant/types";
import { CalendarEntity, CalendarEventsActionEntity } from "../../model";

const initialState: CalendarEntity = {
  payload: [],
  error: ""
};

const CalendarEventsReducer = ( state: CalendarEntity = initialState, action: CalendarEventsActionEntity ): CalendarEntity => {
  switch (action.type) {
    case Types.GET_EVENTS_SUCCESS:
      return {
        payload: action.payload,
        error: action.error
      };

    case Types.GET_EVENTS_FAILURE:
      return {
        payload: action.payload,
        error: action.error
      };

    default:
      return state;
  }
};

export default CalendarEventsReducer;
