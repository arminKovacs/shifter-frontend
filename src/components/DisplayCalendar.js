import React, { useContext, useEffect, useRef } from "react";
import { WorkerShiftContext } from "./context/WorkerShiftContext";
import { ShiftDetailsContext } from "./context/ShiftDetailsContext";
import ShiftDetails from "./ShiftDetails";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/resource-daygrid";
import listPlugin from "@fullcalendar/list";
import "../css/DisplayCalendar.css";

export default function DisplayCalendar() {
  let { workerShifts } = useContext(WorkerShiftContext);
  let {
    showModal,
    modalText,
    setModalText,
    setShiftToDelete,
    setShiftTimeRangeText,
  } = useContext(ShiftDetailsContext);
  let calendarRef = useRef();
  let eventList = [];

  const generateEvents = () => {
    for (let workerShift of workerShifts) {
      if (workerShift.name === "Holiday") {
        generateHoliday(workerShift, eventList);
        continue;
      }
      generateEventDays(workerShift, eventList);
    }
    let calendarApi = calendarRef.current.getApi();
    if (calendarApi.getEventSources()) {
      calendarApi.removeAllEvents();
    }
    calendarApi.addEventSource(eventList);
  };

  const generateHoliday = (workerShift, eventList) => {
    let endDateToModify = new Date(workerShift.endDate);
    endDateToModify.setDate(endDateToModify.getDate() + 1);
    let modifiedEndDate = endDateToModify.toISOString().slice(0, 10);
    eventList.push({
      id: workerShift.id,
      description: workerShift.name,
      display: "block",
      className: "event-text",
      title:
        workerShift.shifterUser.firstName +
        " " +
        workerShift.shifterUser.lastName,
      start: workerShift.startDate,
      end: modifiedEndDate,
      color: "red",
    });
  };

  const generateEventDays = (workerShift, eventList) => {
    let dateMove = new Date(workerShift.startDate);
    let currentDate = workerShift.startDate;

    while (currentDate < workerShift.endDate) {
      currentDate = dateMove.toISOString().slice(0, 10);
      let shiftStart = currentDate + "T" + workerShift.startTime;
      let shiftEnd = currentDate + "T" + workerShift.endTime;
      let shiftDescription =
        workerShift.shifterUser.firstName +
        " " +
        workerShift.shifterUser.lastName +
        " " +
        workerShift.startDate +
        " " +
        workerShift.endDate;

      eventList.push({
        id: workerShift.id,
        description: shiftDescription,
        timeRange:
          workerShift.name +
          " " +
          workerShift.startTime +
          " - " +
          workerShift.endTime,
        display: "list-item",
        className: "event-text",
        title:
          workerShift.shifterUser.firstName +
          " " +
          workerShift.shifterUser.lastName,
        start: shiftStart,
        end: modifyEndDateIfNightShift(shiftEnd, shiftStart, workerShift),
        color: workerShift.shifterUser.calendarColor,
      });
      dateMove.setDate(dateMove.getDate() + 1);
    }
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
    <div>
      <FullCalendar
        schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,listWeek,timeGridDay",
        }}
        slotEventOverlap={false}
        slotLabelFormat={{
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }}
        views={{
          dayGridMonth: {
            displayEventTime: false,
          },
        }}
        eventTimeFormat={{
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }}
        eventClick={(info) => {
          setModalText(info.event._def.extendedProps.description);
          setShiftTimeRangeText(info.event._def.extendedProps.timeRange);
          setShiftToDelete(info.event._def.publicId);
          showModal();
        }}
      />
      <ShiftDetails props={modalText} />
    </div>
  );
}
