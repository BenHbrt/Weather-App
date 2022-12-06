import './HourForecast.scss'

const HourForecast = ({ data }) => {
    return (
        <div className='hour'>
            <div className='hour_title'>{data.time}</div>
        </div>
    )
}
export default HourForecast;