import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import "../../style/weatherChart.css";

function WeatherChart() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  var moment = require("moment");

  let currentDate = moment().format("MMM D YY");

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await axios
        .get(
          `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          const weatherData = res.data;
          setData(weatherData);
          setLoaded(true);
        });
    };
    fetchData();
  }, [lat, long, isLoaded]);

  if (isLoaded) {
    let windSpeedText;
    let bgColor;

    if (data.wind.gust <= 15) {
      windSpeedText = "No weather warnings!";
      bgColor = "#008900";
    } else if (data.wind.gust <= 29) {
      windSpeedText = "Wind gusts of more than 15kph!";
      bgColor = "#e69500";
    } else if (data.wind.gust >= 30) {
      windSpeedText = "Wind gusts of more than 30kph!";
      bgColor = "#e60000 ";
    }

    return (
      <Card className="weathercard" style={{ width: "18rem" }}>
        <Card.Body className="weatherCardBody">
          <Card.Title className="cardTitle">Weather in {data.name}</Card.Title>
          <Card.Subtitle className="subTitle">{currentDate}</Card.Subtitle>{" "}
          <div className="weatherData">
            <p className="weatherVar">Temperature</p>
            <p className="weatherVarCurrent">{data.main.temp}</p>
            <p className="weatherVar">Humidity</p>
            <p className="weatherVarCurrent">{data.main.humidity}%</p>
            <p className="weatherVar">Windspeed</p>
            <p className="weatherVarCurrent">{data.wind.speed} KPH</p>
            <p className="weatherVar">Wind gust</p>
            <p className="weatherVarCurrent">{data.wind.gust} KPH</p>
          </div>
          <Alert
            variant="dark"
            className="weatherAlert"
            style={{ background: bgColor }}
          >
            {windSpeedText}
          </Alert>
        </Card.Body>
      </Card>
    );
  } else {
    return null;
  }
}

export default WeatherChart;
