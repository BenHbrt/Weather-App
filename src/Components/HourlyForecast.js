import './HourlyForecast.scss'

import { useState, useEffect } from 'react'
import axios from 'axios'

import HourForecast from './HourForecast'

const HourlyForecast = ({ selectedDay, setSelectedDay, selectedLocation }) => {

    const [hourlyForecastData, setHourlyForecastData] = useState(null)

    const loadWeekForecastData = async () => {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${selectedLocation.lat}&longitude=${selectedLocation.lon}&hourly=temperature_2m,weathercode,windspeed_10m,winddirection_10m&timezone=auto`);
        setHourlyForecastData(response.data)
    }

    const forecastLength =[]
    if (hourlyForecastData) {
        for (let i = 0; i < hourlyForecastData.hourly.time.length; i++) {
            forecastLength.push(i)
        }
    }
    
    useEffect(() => {
        loadWeekForecastData();
    }, []);

    return (
        <div className='hourforecast'>
            <div className='hourforecast_title'>
                <div>{selectedDay}</div>
                <div className='hourforecast_title_back' onClick={() => {setSelectedDay(null)}}>Back</div>
            </div>
            <button onClick={() => console.log(hourlyForecastData)}>Forecast</button>
            <button onClick={() => console.log(forecastLength)}>ForecastArray</button>
            {hourlyForecastData && <div className="hourforecast_content">
                {forecastLength.filter((day) => hourlyForecastData.hourly.time[day].includes(selectedDay)).map((day) => {
                    return <HourForecast key={day} data={{
                        time: hourlyForecastData.hourly.time[day],
                        temp: hourlyForecastData.hourly.temperature_2m[day],
                        weatherCode: hourlyForecastData.hourly.weathercode[day],
                        windDirection: hourlyForecastData.hourly.winddirection_10m[day],
                        windSpeedMax: hourlyForecastData.hourly.windspeed_10m[day] 
                    }}/>   
                })}
            </div>}
        </div>
    )
}
export default HourlyForecast;