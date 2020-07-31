import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import { RequestContext } from "../context/RequestContext";
import { ShiftContext } from "../context/ShiftContext";
import { Table, Space, Button, Menu, Dropdown, DatePicker } from "antd";
import {
  DownOutlined,
  ClockCircleOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import "../../css/Shifts.css";

export default function Requests() {
  const { RangePicker } = DatePicker;
  let [dataSource, setDatasource] = useState([]);
  let {
    requests,
    shiftRequestDetails,
    postShiftRequests,
    deleteShiftRequest,
    postShiftAssignment,
  } = useContext(RequestContext);
  let { shifts } = useContext(ShiftContext);
  let [displayShift, setDisplayShift] = useState("Shift");
  let [datePicked, setDatePicked] = useState(false);
  let [buttonDisabled, setButtonDisabled] = useState(true);

  const switchToChosenShift = (shift) => {
    setDisplayShift(shift.name);
    shiftRequestDetails.shiftId = shift.id;
    shiftRequestDetails.startTime = shift.startTime;
    shiftRequestDetails.endTime = shift.endTime;
  };

  const dateChange = (value, dateStrings) => {
    shiftRequestDetails.startDate = dateStrings[0];
    shiftRequestDetails.endDate = dateStrings[1];
    setDatePicked(true);
  };

  useEffect(() => {
    let data = requests.map((request) => {
      return {
        key: request.id,
        name:
          request.shifterUser.firstName + " " + request.shifterUser.lastName,
        shiftName: request.name,
        shiftTime: request.startTime + " - " + request.endTime,
        shiftDate: request.startDate + " - " + request.endDate,
        details: request,
      };
    });
    setDatasource(data);

    const disableSubmitButton = () => {
      if (displayShift !== "Shift" && datePicked) {
        setButtonDisabled(false);
      }
    };
    disableSubmitButton();
  }, [requests, displayShift, datePicked]);

  let shiftTypes = (
    <Menu>
      {shifts.map((shift) => (
        <Menu.Item
          key={"shift" + shift.id}
          icon={<ClockCircleOutlined />}
          onClick={() => switchToChosenShift(shift)}
        >
          {shift.name}: {shift.startTime}-{shift.endTime}
        </Menu.Item>
      ))}
    </Menu>
  );

  const disabledDate = (current) => {
    let today = new Date().toISOString().slice(0, 10);
    return current && current < moment(today, "YYYY-MM-DD");
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Shift name",
      dataIndex: "shiftName",
      key: "shiftName",
    },
    {
      title: "Shift time",
      dataIndex: "shiftTime",
      key: "shiftTime",
    },
    {
      title: "Shift date",
      dataIndex: "shiftDate",
      key: "shiftDate",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              postShiftAssignment(text.details, text.key);
            }}
          >
            Accept
          </Button>
          <Button
            onClick={() => {
              deleteShiftRequest(text.key);
            }}
          >
            Deny
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Dropdown overlay={shiftTypes} className="shift-dropdown">
        <Button>
          {displayShift} <DownOutlined />
        </Button>
      </Dropdown>
      <RangePicker
        className="work-time"
        onChange={dateChange}
        disabledDate={disabledDate}
      />
      <Button
        type="primary"
        shape="circle"
        icon={<CheckOutlined />}
        className="check-button"
        onClick={postShiftRequests}
        disabled={buttonDisabled}
      />
      <Table
        dataSource={dataSource}
        columns={columns}
        scroll={{ x: "max-content" }}
      />
    </div>
  );
}
