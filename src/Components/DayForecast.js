import './DayForecast.scss'

import getDateString from '../Functions/GetDateString'
import getTimeString from '../Functions/GetTimeString'

const DayForecast = ({ data }) => {

    const day = getDateString(data.time)
    const sunrise = getTimeString(data.sunrise)
    const sunset = getTimeString(data.sunset)

    return (
        <div className='dayforecast'>
            <div className='dayforecast_title'>{day}</div>
            <div>Max Temp: {data.tempMax}°C</div>
            <div>Min Temp: {data.tempMin}</div>
            <div>Weathercode: {data.weatherCode}</div>
            <div>Wind Direction: {data.windDirection}</div>
            <div>Wind Speed: {data.windSpeedMax}</div>
            <div className='dayforecast_sun'>
                <div>Sunrise: {sunrise}</div>
                <div>Sunset: {sunset}</div>
            </div>         
            {/* <button onClick={() => {console.log(test)}}>Click</button> */}
        </div>
    )
}
export default DayForecast;