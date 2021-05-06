import Data from "../../Data";
import React, { useEffect, useState } from "react";

export default function TableView() {
  let [operators, setData] = useState([]);

  useEffect(() => {
    Data.getAllOperators()
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
            <th scope="col">Email</th>
            <th scope="col">Website</th>
            <th scope="col">Phone Number</th>
            <th scope="col">ID</th>
          </tr>
        </thead>
        <tbody>
          {operators.map((operator) => (
            <tr>
              <td>{operator.company_name}</td>
              <td>{operator.email}</td>
              <td>{operator.website}</td>
              <td>{operator.phone_number}</td>
              <td>{operator.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
