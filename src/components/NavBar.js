import React from "react";

export default function NavBar(props) {
  return (
    <div className="container">
      <div className="row nav">
        <div className="col-md-6">
          <h1 className="title">Weather App</h1>
        </div>
        <div className="col-md-6">
          <form className="region" onSubmit={(e) => props.changeWeather(e)}>
            <input
              type="text"
              className="region-input"
              placeholder="Enter location"
              onChange={(e) => {
                props.changeRegion(e.target.value);
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
