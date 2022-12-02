import './Forecast.scss'

import { weatherLocations1, weatherLocations2 } from '../Data/PracticeData';

import { useState } from 'react'

import CurrentWeather from './CurrentWeather';

const Forecast = () => {

    const [locations, setLocations] = useState(weatherLocations1)

    return (
        <div className='forecast'>
            {locations.map((loc, i) => {
                return <CurrentWeather key={i} loc={loc} />
            })}
            {/* <button onClick={() => console.log(locations)}>Locations</button> */}
        </div>
    )
}
export default Forecast;