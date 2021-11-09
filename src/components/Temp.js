// api.openweathermap.org/data/2.5/weather?q=pune&appid=abd793a49182af06d9e646d3b0ab6d1c
import React, { useEffect, useState } from "react";
import "./style.css";
import WeatherCard from "./WeatherCard";
const Temp = () => {
  const [inputText, setInputText] = useState("karnal");
  const [tempData, setTempData] = useState({});
  //setting input feild
  const setInput = (e) => {
    setInputText(e.target.value);
  };

  // API called and data recieved
  const getWeatherData = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&units=metric&appid=abd793a49182af06d9e646d3b0ab6d1c`;
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);

      // object destructuring in api
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      // taking all objects to use in app
      const myWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      setTempData(myWeatherInfo);
      console.log(tempData);

      //   console.log(temperature);
    } catch (error) {
      console.log(error);
    }
  };

  // on the time first time this fxn need to be called
  useEffect(() => {
    getWeatherData();
  }, []);

  //wallpaper change logic
  var systemTime = new Date().getHours();
  return (
    <div className={systemTime >= 19 ? "top-container2" : "top-container1"}>
      <div className="container center">
        <div className="container-1 ">
          <div className="input-Container center">
            <input
              type="text"
              placeholder="Enter Country or City"
              value={inputText}
              onChange={setInput}
            />
            <button onClick={getWeatherData}>Search</button>
          </div>
          <WeatherCard tempData={tempData} />
        </div>
      </div>
    </div>
  );
};

export default Temp;
