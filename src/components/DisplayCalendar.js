import React, { useContext, useEffect } from "react";
import { WorkerShiftContext } from "./context/WorkerShiftContext";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/resource-daygrid";
import "../css/DisplayCalendar.css";

export default function DisplayCalendar() {
  let { workerShifts } = useContext(WorkerShiftContext);
  let calendarRef = React.useRef();

  const generateEvents = () => {
    let eventList = [];
    for (let workerShift of workerShifts) {
      let dateMove = new Date(workerShift.startDate);
      let strDate = workerShift.startDate;

      while (strDate < workerShift.endDate) {
        strDate = dateMove.toISOString().slice(0, 10);

        eventList.push({
          className: "event-text",
          title:
            workerShift.shifterUser.firstName +
            " " +
            workerShift.shifterUser.lastName,
          start: strDate + "T" + workerShift.startTime,
          end: strDate + "T" + workerShift.endTime,
          //color:"green"
        });

        dateMove.setDate(dateMove.getDate() + 1);
      }
    }

    let calendarApi = calendarRef.current.getApi();    
    calendarApi.addEventSource(eventList);
  };

  useEffect(generateEvents, [workerShifts]);

  return (
    <FullCalendar
      ref={calendarRef}
      plugins={[dayGridPlugin, timeGridPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      allDaySlot={false}
    />
  );
}
