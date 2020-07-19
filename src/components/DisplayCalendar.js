import React, { useContext, useEffect } from "react";
import { WorkerShiftContext } from "./context/WorkerShiftContext";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/resource-daygrid";
import "../css/DisplayCalendar.css";

export default function DisplayCalendar() {
  let { workerShifts } = useContext(WorkerShiftContext);
  let calendarRef = React.useRef();

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const generateEvents = () => {
    let eventList = [];
    for (let workerShift of workerShifts) {
      let dateMove = new Date(workerShift.startDate);
      let currentDate = workerShift.startDate;
      let userColor = getRandomColor();

      while (currentDate < workerShift.endDate) {
        currentDate = dateMove.toISOString().slice(0, 10);
        let shiftStart = currentDate + "T" + workerShift.startTime;
        let shiftEnd = currentDate + "T" + workerShift.endTime;

        eventList.push({
          display: "list-item",
          id: workerShift.id,
          className: "event-text",
          title:
            workerShift.shifterUser.firstName +
            " " +
            workerShift.shifterUser.lastName,
          start: shiftStart,
          end: modifyEndDateIfNightShift(shiftEnd, shiftStart, workerShift),
          color: userColor,
        });
        dateMove.setDate(dateMove.getDate() + 1);
      }
    }
    let calendarApi = calendarRef.current.getApi();
    if (calendarApi.getEventSources()) {
      calendarApi.removeAllEvents();
    }
    calendarApi.addEventSource(eventList);
  };

  const modifyEndDateIfNightShift = (shiftEnd, shiftStart, workerShift) => {
    if (new Date(shiftEnd) < new Date(shiftStart)) {
      let dateMoveEnd = new Date(shiftEnd);
      dateMoveEnd.setDate(dateMoveEnd.getDate() + 1);
      shiftEnd =
        dateMoveEnd.toISOString().slice(0, 10) + "T" + workerShift.endTime;
    }
    return shiftEnd;
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
      nextDayThreshold="06:00:00"
      slotLabelFormat={{
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }}
      eventTimeFormat={{
        hour: "2-digit",
        minute: "2-digit",
        meridiem: false,
        hour12: false,
      }}
    />
  );
}
