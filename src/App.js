import React from "react";
import Axios from "axios";
import "./App.css";
import DisplayWeather from "./components/DisplayWeather.js";
import NavBar from "./components/NavBar";

class App extends React.Component {
  state = {
    coords: {
      latitude: 45,
      longitude: 60,
    },
    data: {},
    inputData: "",
  };

  componentDidMount() {
    //get location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        this.setState({ coords: newCoords });

        // Api call

        Axios.get(
          `http://api.weatherstack.com/current?access_key=eedb7186c833d0c1d81fdc5cb22e2696&query=${this.state.coords.latitude},${this.state.coords.longitude}`
        ).then((res) => {
          let weatherData = {
            location: res.data.location.name,
            temperature: res.data.current.temperature,
            description: res.data.current.weather_descriptions[0],
            region: res.data.location.region,
            country: res.data.location.country,
            wind_speed: res.data.current.wind_speed,
            pressure: res.data.current.pressure,
            precip: res.data.current.precip,
            humidity: res.data.current.humidity,
            img: res.data.current.weather_icons,
          };
          this.setState({ data: weatherData });
        });
      });
    } else {
      console.log("Not Supported");
    }
  }
  //track the input

  change = (value) => {
    this.setState({ inputData: value });
  };
  changeWeather = (event) => {
    event.preventDefault();

    // Api call
    Axios.get(
      `http://api.weatherstack.com/current?access_key=eedb7186c833d0c1d81fdc5cb22e2696&query=${this.state.inputData}`
    ).then((res) => {
      let weatherData = {
        location: res.data.location.name,
        temperature: res.data.current.temperature,
        description: res.data.current.weather_descriptions[0],
        region: res.data.location.region,
        country: res.data.location.country,
        wind_speed: res.data.current.wind_speed,
        pressure: res.data.current.pressure,
        precip: res.data.current.precip,
        humidity: res.data.current.humidity,
        img: res.data.current.weather_icons,
      };
      this.setState({ data: weatherData });
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <NavBar
            changeWeather={this.changeWeather}
            changeRegion={this.change}
          />
          <DisplayWeather weatherData={this.state.data} />
        </div>
      </div>
    );
  }
}
export default App;
