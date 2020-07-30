import React from "react";
import { Table, Space, Button } from "antd";

export default function Requests() {
  const dataSource = [
    {
      key: "1",
      name: "Test Joe",
      shiftName: "Holiday",
      shiftTime: "00:00:00 - 23:59:59",
      shiftDate: "2020-08-20 - 2020-08-23",
    },
    {
      key: "2",
      name: "Test Bob",
      shiftName: "Morning",
      shiftTime: "06:00:00 - 14:00:00",
      shiftDate: "2020-08-20 - 2020-08-23",
    },
  ];

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
          <Button>Accept</Button>
          <Button>Deny</Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        scroll={{ x: "max-content" }}
      />
      ;
    </div>
  );
}
