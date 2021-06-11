import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "../../style/tableview.css";
import { useHistory } from "react-router";
import moment from "moment";

export default function TableView({ data, columns, type }) {
  const history = useHistory();
  const tableRowEvents = {
    onClick: (e, row, rowIndex) => {
      history.push({
        pathname: "/details/" + type + "/" + row.id,
      });
    },
  };

  if (!columns.length) {
    return null;
  } else {
    if (type === "operators") {
    } else {
      for (let i = 0; i < data.length; i++) {
        data[i].created_at = moment(data[i].created_at).calendar();
        data[i].updated_at = moment(data[i].updated_at).calendar();
        if (data[i].status === 1) {
          data[i].status = "Active";
        } else if (data[i].status === 0) {
          data[i].status = "Not active";
        }
      }
    }
    return (
      <div className="tableview">
        <div className="table">
          <BootstrapTable
            keyField="id"
            data={data}
            columns={columns}
            rowEvents={tableRowEvents}
          ></BootstrapTable>
        </div>
      </div>
    );
  }
}
