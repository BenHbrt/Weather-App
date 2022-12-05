import './WeekForecast.scss'

import { useState, useEffect } from 'react'
import axios from 'axios'

import DayForecast from './DayForecast'

const WeekForecast = ({ selectedLocation, setSelectedLocation }) => {

    const [weekForecast, setWeekForecast] = useState(null)

    const loadWeekForecastData = async () => {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${selectedLocation.lat}&longitude=${selectedLocation.lon}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,weathercode,windspeed_10m_max,winddirection_10m_dominant&timezone=auto`);
        setWeekForecast(response.data)
    }

    const forecastLength =[]
    if (weekForecast) {
        for (let i = 0; i < weekForecast.daily.time.length; i++) {
            forecastLength.push(i)
        }
    }
    

    useEffect(() => {
        loadWeekForecastData();
    }, []);

    return (
        <div className='weekforecast' onClick={() => {setSelectedLocation(null)}}>
            <div className='weekforecast_title'>
                <div>{selectedLocation.name}</div>
                <div className='weekforecast_title_back'>Back</div>
            </div>
            {weekForecast && <div className="weekforecast_content">
                {forecastLength.map((day) => {
                    return <DayForecast key={day} data={{
                        time: weekForecast.daily.time[day],
                        sunrise: weekForecast.daily.sunrise[day],
                        sunset: weekForecast.daily.sunset[day],
                        tempMax: Math.round(weekForecast.daily.temperature_2m_max[day]),
                        tempMin: Math.round(weekForecast.daily.temperature_2m_min[day]),
                        weatherCode: weekForecast.daily.weathercode[day],
                        windDirection: weekForecast.daily.winddirection_10m_dominant[day],
                        windSpeedMax: weekForecast.daily.windspeed_10m_max[day] 
                    }}/>   
                })}
            </div>}
        </div>
    )
}
export default WeekForecast;