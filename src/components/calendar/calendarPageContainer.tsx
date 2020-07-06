import CalendarPage from "./calendarPage";
import { getCalendarEvents } from "../../common/action";
import { connect } from "react-redux";
import { State } from "../../rootReducer";
import "./css/calendarStyle.css";

const mapStateToProps = (state: State) => ({
    calendarEvents: state.calendarEvents
});
  
const mapDispatchToProps = (dispatch: any) => ({
    getCalendarEvents: () => dispatch(getCalendarEvents()),
});

export const CalendarPageContainer = connect(mapStateToProps, mapDispatchToProps)(CalendarPage);