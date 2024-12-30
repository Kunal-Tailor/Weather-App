import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 14.49,
    humidity: 72,
    temp: 15.05,
    tempMax: 15.05,
    tempMin: 15.05,
    weather: "smoke",
  });
  let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by Kunal</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
