import './WeekForecast.scss'

const WeekForecast = ({ selectedLocation, setSelectedLocation }) => {
    return (
        <div className='weekforecast' onClick={() => {setSelectedLocation(null)}}>
            <div className='weekforecast_title'>
                <div>{selectedLocation.name}</div>
                <div className='weekforecast_title_back'>Back</div>
            </div>
            <div className='weekforecast_day'>Mon</div>
            <div className='weekforecast_day'>Tue</div>
            <div className='weekforecast_day'>Wed</div> 
            <div className='weekforecast_day'>Thu</div>
            <div className='weekforecast_day'>Fri</div>
            <div className='weekforecast_day'>Sat</div>
            <div className='weekforecast_day'>Sun</div>
        </div>
    )
}
export default WeekForecast;