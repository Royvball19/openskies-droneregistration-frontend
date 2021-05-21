import Data from "../../Data";
import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import TableTypes from "../../DataTypes";
import "../../style/tableview.css";
import { useHistory } from 'react-router'
import { AiOutlineNodeIndex } from "react-icons/ai";

export default function TableView( { data, columns}) {

const history = useHistory();
const tableRowEvents = {

  onClick: (e, row, rowIndex) => {
    history.push({
      pathname: "/details/operator/" + row.id,
   });
  
  }
 
}

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
            rowEvents={ tableRowEvents}
          ></BootstrapTable>
        </div>
      </div>
    );
  }
}
