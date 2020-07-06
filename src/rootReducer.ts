import { combineReducers } from "redux";

import { CalendarEntity } from "./common/model";

import CalendarEventsReducer from "./common/reducer/calendar/calendarEventsReducer";

export interface State {
  calendarEvents: CalendarEntity;
}

const RootReducer = combineReducers({
  calendarEvents: CalendarEventsReducer,
});

export default RootReducer;
