import './DayForecast.scss'

import getDateString from '../Functions/GetDateString'
import getTimeString from '../Functions/GetTimeString'
import windDirection from "../Functions/WindDirection";
import weatherType from "../Functions/WeatherType";

const DayForecast = ({ data }) => {

    const day = getDateString(data.time)
    const sunrise = getTimeString(data.sunrise)
    const sunset = getTimeString(data.sunset)
    const windDir = windDirection(data.windDirection)
    const type = weatherType(data.weatherCode, true)

    return (
        <div className='dayforecast'>
            <div className='dayforecast_title'>{day}</div>
            <div className='dayforecast_main'>
                <div className='dayforecast_main_temp'>
                    <div>
                        <img src={require("../Images/WeatherIcons/thermostat.png")} alt="temperature" />
                        <img src={require("../Images/WeatherIcons/up.png")} alt="maximum" />
                        {data.tempMax}°C
                    </div>
                    <div>
                        <img src={require("../Images/WeatherIcons/thermostat.png")} alt="temperature" />
                        <img src={require("../Images/WeatherIcons/down.png")} alt="minimum" />
                        {data.tempMin}°C
                    </div>
                </div>
                <div className="dayforecast_main_weather">
                    <div>{type.type.name}</div>
                    {/* <div>Thunderstorm with slight hail</div> */}
                    <img src={require(`../Images/WeatherIcons/${type.type.img}`)} alt={type.img}></img>  
                </div>
            </div>   
            <div className='dayforecast_wind'>
                <img src={require("../Images/WeatherIcons/air.png")} alt="wind" />
                {data.windSpeedMax}km/h, {windDir}  
            </div>
            <div className='dayforecast_sun'>
                <img src={require("../Images/WeatherIcons/sunrise.png")} alt="sunrise" />
                {sunrise}
                <span>|</span>
                <img src={require("../Images/WeatherIcons/sunset.png")} alt="sunset" />
                {sunset}
            </div>         
        </div>
    )
}
export default DayForecast;