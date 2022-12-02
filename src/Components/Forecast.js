import './Forecast.scss'

import { weatherLocations1, weatherLocations2 } from '../Data/PracticeData';

import { useState } from 'react'

import CurrentWeather from './CurrentWeather';

const Forecast = () => {

    const [locations, setLocations] = useState(weatherLocations1)
    const [selectedLocation, setSelectedLocation] = useState(null)

    return (
        <div className='forecast'>
            {selectedLocation === null && locations.map((loc, i) => {
                return <CurrentWeather key={i} loc={loc} setSelectedLocation={setSelectedLocation} />
            })}
            {selectedLocation && <div className='window' onClick={() => {setSelectedLocation(null)}}>{selectedLocation}</div>}
            {/* <button onClick={() => console.log(locations)}>Locations</button> */}
        </div>
    )
}
export default Forecast;