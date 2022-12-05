import './CurrentWeather.scss'

import { useState, useEffect} from 'react'

import windDirection from "../Functions/WindDirection";
import weatherType from "../Functions/WeatherType";
import isDaytime from "../Functions/IsDaytime";
import axios from 'axios'

const CurrentWeather = ({ loc, setSelectedLocation }) => {

    const [weatherData, setWeatherData] = useState(null)

    const loadData = async () => {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lon}&current_weather=true&timezone=auto&daily=sunrise,sunset`);
        setWeatherData({
            temperature: response.data.current_weather.temperature,
            windspeed: response.data.current_weather.windspeed,
            winddirection: response.data.current_weather.winddirection,
            weathercode: response.data.current_weather.weathercode,
            time: response.data.current_weather.time,
            sunrise: response.data.daily.sunrise[0],
            sunset: response.data.daily.sunset[0],
            daytime: isDaytime(response.data.current_weather.time, response.data.daily.sunrise[0], response.data.daily.sunset[0]),
            windDirectionText: windDirection(response.data.current_weather.winddirection),
            type: weatherType(response.data.current_weather.weathercode, isDaytime(response.data.current_weather.time, response.data.daily.sunrise[0], response.data.daily.sunset[0]))
    
        })
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
        {weatherData && <div className="currentweather" onClick={() => setSelectedLocation(loc)} >
            <div className='currentweather_title'>{loc.name}</div>
            <div className="currentweather_main">
                <div className="currentweather_main_temp">{weatherData.temperature}°C</div>
                <div className="currentweather_main_weather">
                    <div>{weatherData.type.type.name}</div>
                    {/* <div>Thunderstorm with slight hail</div> */}
                    <img src={require(`../Images/WeatherIcons/${weatherData.type.type.img}`)} alt={weatherData.type.type.img}></img>  
                </div>
            </div>
            <div className='currentweather_wind'>
                <img src={require("../Images/WeatherIcons/air.png")} alt="wind" />
                {weatherData.windspeed}km/h, {weatherData.windDirectionText}
            </div>
            <div className="currentweather_update">Updated at {weatherData.time.slice(-5)} local time.</div>
        </div>}
        </>
    )
}
export default CurrentWeather;

        // {weatherData &&
        // <div onMouseEnter={changeHover} onMouseLeave={changeHover} onClick={setCity} className={`currentWeather ${!weatherDetailCity || (weatherDetailCity.name === data.name) ? "" : "notselected"}`}>
        //     <h2>{data.name}</h2>
        //     <img src={"./Icons/close.png"} className={`closeButton${hover ? "-active" : ""}`} onClick={deleteLoc} />
        //     <div className="currentWeather_main">
        //         <div className="currentWeather_temp">
        //             <span>{weatherData.temperature}°C</span>
        //         </div>
        //         <div className="currentWeather_weather">
        //             <span>{weatherData.type.type.name}</span>
        //             <img src={`./WeatherIcons/${weatherData.type.type.img}`}></img>
        //         </div>
        //     </div>
        //     <p><strong>Windspeed: </strong>{weatherData.windspeed}km/h</p>
        //     <p><strong>Wind direction: </strong>{weatherData.windDirectionText}</p>
        //     <p>Last updated: {weatherData.time.slice(-5)}</p>
        //     <button onClick={() => console.log(weatherData)}>Data</button>
        //     {weatherDetailCity && <p>Weather Detail City: {weatherDetailCity.name}</p>}
        // </div>}