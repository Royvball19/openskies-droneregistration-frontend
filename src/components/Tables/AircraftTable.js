import Data from "../../Data";
import React, { useEffect, useState } from "react";

export default function TableView() {
  let [aircrafts, setData] = useState([]);

  useEffect(() => {
    Data.getAllAircrafts()
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
            <th scope="col">Company Name</th>
            <th scope="col">Model</th>
            <th scope="col">Status</th>
            <th scope="col">ID</th>
          </tr>
        </thead>
        <tbody>
          {aircrafts.map((aircraft) => (
            <tr>
              <td>{aircraft.operator.company_name}</td>
              <td>{aircraft.model}</td>
              <td>{aircraft.status}</td>
              <td>{aircraft.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
