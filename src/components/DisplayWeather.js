import React from "react";

export default function DisplayWeather(props) {
  const {
    location,
    temperature,
    description,
    region,
    country,
    wind_speed,
    pressure,
    precip,
    humidity,
    img,
  } = props.weatherData;

  return (
    <div className="container user-weather">
      <div className="row">
        <div className="col-md-3 weather-temp">
          <h1>
            {temperature}
            <sup>o</sup>C, {description}
          </h1>
          <h2>{location}</h2>
          <h4>
            {region}, {country}
          </h4>
        </div>
        <div className="col-md-9 weather-temp">
          <img src={img} alt="" className="mainImg" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 weather-info">
          <p>
            <b>Wind Speed</b>(km/hr)
          </p>
          <h2>{wind_speed}</h2>
        </div>
        <div className="col-md-3 weather-info">
          <p>
            <b>Preassure</b>(millibar)
          </p>
          <h2>{pressure}</h2>
        </div>
        <div className="col-md-3 weather-info">
          <p>
            <b>Precipitation</b>(mm)
          </p>
          <h2>{precip}</h2>
        </div>
        <div className="col-md-3 weather-info">
          <p>
            <b>Humidity</b>(%)
          </p>
          <h2>{humidity}</h2>
        </div>
      </div>
    </div>
  );
}
