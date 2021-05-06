import Data from "../../Data";
import React, { useEffect, useState } from "react";

export default function ReportTable() {
  let [reports, setData] = useState([]);

  useEffect(() => {
    Data.getAllReports()
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      }, [])
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Created at</th>
            <th scope="col">Updated at</th>
            <th scope="col">ID</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr>
              <td>{report.report_type}</td>
              <td>{report.created_at}</td>
              <td>{report.updated_at}</td>
              <td>{report.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
