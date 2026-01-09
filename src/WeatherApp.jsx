import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import CloudIcon from '@mui/icons-material/Cloud';
import "./WeatherApp.css";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "New Delhi",
        description: "clear sky",
        feelsLike: 14.29,
        humidity: 25,
        temp: 15.98,
        tempMax: 15.98,
        tempMin: 15.98,
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div className="weatherRoot">
            <div className="WeatherApp">
                <header>
                    <h2>Weather at a Glance <CloudIcon/></h2>
                </header>
                <SearchBox updateInfo={updateInfo}/>
                <InfoBox info={weatherInfo} />
            </div>
        </div>
 
    );
}