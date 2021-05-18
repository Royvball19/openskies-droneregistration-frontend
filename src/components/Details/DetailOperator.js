import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../../style/details.css";

export default function DetailOperator() {
  return (
    <div className="detailOperatorContainer">
      <div className="headerDiv">
        <h2 className="titleH">Details Operator</h2>
        <Button className="exportButton">Export</Button>
      </div>
      <div className="allDetails">
        <div className="operatorDetails">
          <div className="staticDetails">
            <h3>Company name:</h3>
            <h3>Company number:</h3>
            <h3>ID:</h3>
            <h3>Registered at:</h3>
            <br></br>
            <h3>Adress:</h3>
            <h3>Postal code:</h3>
            <h3>Country:</h3>
            <br></br>
            <h3>Email:</h3>
            <h3>Phone number:</h3>
            <br></br>
            <h3>Insurance number:</h3>
            <h3>Vat number:</h3>
            <h3>Expiration:</h3>
            <h3>Operator type:</h3>
            <br></br>
            <h3>Operator created at:</h3>
            <h3>Last updated at:</h3>
          </div>
          <div className="changingDetails">
            <h4>Starfled Industries</h4>
            <h4>23423432</h4>
            <h4>390-1023-12</h4>
            <h4>14-06-2019</h4>
            <br></br>
            <h4>Streetname 2</h4>
            <h4>9823SJ</h4>
            <h4>Switzerland</h4>
            <br></br>
            <h4>drone@starfled.com</h4>
            <h4>+31 546 34 90 45</h4>
            <br></br>
            <h4>324-324-323</h4>
            <h4>234324</h4>
            <h4>22-05-2022</h4>
            <h4>AUTH</h4>
            <br></br>
            <h4>14-06-2019</h4>
            <h4>09-06-2021</h4>
          </div>
        </div>
        <div className="allSmallDetails">
          <div className="pilots">
            <h2>Pilots</h2>
          </div>
          <div className="aircrafts">
            <h2>Aircrafts</h2>
          </div>
          <div className="reports">
            <h2>Reports</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
