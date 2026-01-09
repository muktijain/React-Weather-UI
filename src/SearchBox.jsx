import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import Typography from '@mui/material/Typography';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URl = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "21568f09e6f7061de1830241f2a26c54";

    let getWeatherInfo = async () => {
        try{      
            let response = await fetch(
                `${API_URl}?q=${city}&appid=${API_KEY}&units=metric`
            );
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
             description: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch(err) {
            throw err;
        };

    };
    let handleChange = (evt) => {
        setCity(evt.target.value);
    };
    let handleSubmit = async (evt) => {
        try{
             evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }
    };

    return(
        <div className='SearchBox'>
                  <Typography variant="h5" gutterBottom>
                        Search for weather :
                    </Typography>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    value={city}
                    onChange={handleChange}
                    required/>
                <br/>
                <Button variant="contained" type='submit' disabled={!city}>
                        Search
                </Button>
                {error && <p style={{color: "red"}}><i>No such place exists!</i></p>}
            </form>
        </div>
    )
}