import Data from "../../Data";
import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import TableTypes from "../../DataTypes";
import "../../style/tableview.css";

export default function TableView( { data, columns}) {
  
  if (columns === null) {
    return null;

  } else {
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
