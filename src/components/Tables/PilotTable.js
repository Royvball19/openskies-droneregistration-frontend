import Data from "../../Data";
import React, { useEffect, useState } from "react";

export default function PilotTable() {
  let [pilots, setData] = useState([]);

  useEffect(() => {
    Data.getAllPilots()
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
            <th scope="col">Created</th>
            <th scope="col">Updated</th>
            <th scope="col">ID</th>
          </tr>
        </thead>
        <tbody>
          {pilots.map((pilot) => (
            <tr>
              <td>{pilot.created_at}</td>
              <td>{pilot.updated_at}</td>
              <td>{pilot.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
