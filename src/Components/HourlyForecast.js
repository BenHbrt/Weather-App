import './HourlyForecast.scss'

const HourlyForecast = ({ selectedDay, setSelectedDay }) => {
    
    
    return (
        <div className='hourforecast'>
            <div className='hourforecast_title'>
                <div>{selectedDay}</div>
                <div className='hourforecast_title_back' onClick={() => {setSelectedDay(null)}}>Back</div>
            </div>
            {/* {weekForecast && <div className="hourforecast_content">
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
            </div>} */}
        </div>
    )
}
export default HourlyForecast;