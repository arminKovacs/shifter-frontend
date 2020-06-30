import React from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/resource-daygrid";
import '../css/DisplayCalendar.css'

export default function DisplayCalendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      events={[
        {
          className: "event-text",
          title: "test",
          start: "2020-07-01T06:00:00",
          end: "2020-07-01T14:00:00",
          color: "yellow",
          textColor: "black",
        },
        {
          className: "event-text",
          title: "test2",
          start: "2020-07-01T14:00:00",
          end: "2020-07-01T22:00:00",
        },
        {
          className: "event-text",
          title: "test3",
          start: "2020-07-01T10:00:00",
          end: "2020-07-01T16:00:00",
          color: "green",
        },
      ]}
    />
  );
}
