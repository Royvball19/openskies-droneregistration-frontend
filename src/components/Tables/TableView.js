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
    // const test2 = data[0].created_at;

    // console.log(moment(test2).calendar());
    console.log(data);

    // let newDate = data.map(
    //   (datas) =>
    //     (data = {
    //       id: datas.id,
    //       registration_mark: datas.registration_mark,
    //       maci_number: datas.maci_number,
    //       mass: datas.mass,
    //       model: datas.model,
    //       status: datas.status,
    //       created_at: moment(datas.created_at).calendar(),
    //       updated_at: moment(datas.updated_at).calendar(),
    //     })
    // );

    // console.log(newDate);

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
