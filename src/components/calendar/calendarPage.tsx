import * as React from "react";
import { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarEntity } from "../../common/model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar
    },
    table: {
      minWidth: 650
    }
  })
);

interface Props{
  getCalendarEvents():void;
  calendarEvents:CalendarEntity;
}

const CalendarPage = (props: Props) => {
    const classes = useStyles();
    const {getCalendarEvents, calendarEvents} = props;

    useEffect(() => {
      getCalendarEvents()
    }, [])

    return(
        <div>
            <div className={classes.toolbar} />
            <div className="body-spacing">
              <FullCalendar
                plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialView='dayGridMonth'
                events={calendarEvents.payload}
              />
            </div>
        </div>
    )
}

export default CalendarPage;