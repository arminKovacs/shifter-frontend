import React from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/resource-daygrid";
import "../css/DisplayCalendar.css";

export default function DisplayCalendar() {
  let eventList = [
    {
      className: "event-text",
      title: "test",
      start: "2020-07-15T06:00:00",
      end: "2020-07-15T14:00:00",
      color:"green"
    },
    {
      className: "event-text",
      title: "test",
      start: "2020-07-16T06:00:00",
      end: "2020-07-16T14:00:00",
    },
    {
      className: "event-text",
      title: "Joska Pista",
      start: "2020-07-16T06:00:00",
      end: "2020-07-16T14:00:00",
      color: 'yellow'
    },
    {
      className: "event-text",
      title: "test2",
      start: "2020-07-15T14:00:00",
      end: "2020-07-15T22:00:00",
    },
    {
      className: "event-text",
      title: "test3",
      start: "2020-07-16T14:00:00",
      end: "2020-07-16T22:00:00",
    },
  ];
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      allDaySlot={false}
      events={eventList}
    />
  );
}
