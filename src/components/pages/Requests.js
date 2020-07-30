import React, { useContext, useEffect, useState } from "react";
import { RequestContext } from "../context/RequestContext";
import { Table, Space, Button } from "antd";

export default function Requests() {
  let [dataSource, setDatasource] = useState([]);
  let { requests } = useContext(RequestContext);

  useEffect(() => {
    let data = []
    requests.map((request) => {
      data.push({
        key: request.id,
        name:
          request.shifterUser.firstName + " " + request.shifterUser.lastName,
        shiftName: request.name,
        shiftTime: request.startTime + " - " + request.endTime,
        shiftDate: request.startDate + " - " + request.endDate,
      });
    });
    setDatasource(data);
  }, [requests]);

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
    </div>
  );
}
