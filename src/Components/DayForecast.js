import './DayForecast.scss'

const DayForecast = ({ data }) => {

    const day = new Date(data.time)

    return (
        <div className='dayforecast'>
            <h3>{day.day}</h3>
            <h4>{day.date}</h4>
            <p>Sunrise: {data.sunrise}</p>
            <p>Sunset: {data.sunset}</p>
            <p>Max Temp: {data.tempMax}°C</p>
            <p>Min Temp: {data.tempMin}</p>
            <p>Weathercode: {data.weatherCode}</p>
            <p>Wind Direction: {data.windDirection}</p>
            <p>Wind Speed: {data.windSpeedMax}</p>
        </div>
    )
}
export default DayForecast;