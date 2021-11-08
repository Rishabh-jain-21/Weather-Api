import React, { useState, useEffect } from "react";

const WeatherCard = (props) => {
  const [weatherIcon, setweatherIcon] = useState("sunny");
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = props.tempData;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setweatherIcon("wi-day-cloudy");
          break;
        case "Haze":
          setweatherIcon("wi-fog");
          break;
        case "Clear":
          setweatherIcon("wi-day-sunny");
          break;
        case "Rain":
          setweatherIcon("wi-showers");
          break;
        case "Snow":
          setweatherIcon("wi-snow");
          break;
        default:
          setweatherIcon("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  //converting susets seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <div className="Display-container">
      {console.log(props)}
      <div className="first center">
        <i style={{ fontSize: 60 }} className={`wi ${weatherIcon}`}></i>
      </div>
      <div className="second">
        <div
          className="second-child-1 center"
          style={{
            justifyContent: "space-between",
            padding: "0px 70px 0px 10px",
          }}
        >
          <span style={{ color: "white", fontSize: "60px" }}>
            <i
              style={{ fontSize: "50px", paddingRight: "15px" }}
              className="wi wi-thermometer"
            ></i>
            {temp}°
          </span>
          <div
            style={{
              color: "white",
              fontSize: "30px",
            }}
          >
            {weathermood}{" "}
            <div>
              {name} , {country}
            </div>
          </div>
        </div>
        <div className="second-child-2 center">
          {new Date().toLocaleString()}
        </div>
      </div>
      <div className="third">
        <div className="width">
          <i className="wi wi-sunset third-text"></i>
          <span className="third-text">
            <p>Sunset at</p>
            <p>{timeStr}</p>
          </span>
        </div>
        <div className="width">
          <i className="wi wi-humidity third-text"></i>
          <span className="third-text">
            {" "}
            <p>{humidity}</p>
            <p>Humidity</p>
          </span>
        </div>
        <div className="width">
          <i className="wi wi-hail third-text"></i>
          <span className="third-text">
            {" "}
            <p>Pressure</p>
            <p>{pressure}</p>
          </span>
        </div>
        <div className="width">
          <i className="wi wi-strong-wind third-text"></i>
          <span className="third-text">
            {" "}
            <p>{speed}</p>
            <p>Speed</p>
          </span>
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
