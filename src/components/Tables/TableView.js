import Data from "../../Data";
import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import TableTypes from "../../DataTypes";
import "../../style/tableview.css";
import moment from "moment";

export default function TableView({ data, columns }) {
  if (!data.length) {
    return null;
  } else {
    for (let i = 0; i < data.length; i++) {
      data[i].created_at = moment(data[i].created_at).calendar();
      data[i].updated_at = moment(data[i].updated_at).calendar();
    }

    return (
      <div className="tableview">
        <div className="table">
          <BootstrapTable
            keyField="id"
            data={data}
            columns={columns}
          ></BootstrapTable>
        </div>
      </div>
    );
  }
}
