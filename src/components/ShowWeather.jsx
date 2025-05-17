import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import getCityWeather from '../models/WeatherDataModel'


const ShowWeather = () => {
    const [city, setCity] = useState('Kerala');
    const [weatherData, setWeatherData] = useState(null)

    
    useEffect(()=>{
        async function fetchWeather() {
            const data = await getCityWeather(city)
            setWeatherData(data)
        }
        fetchWeather();
    },[city])

  return (
    <div>
        { !weatherData ? (
            <p>Loading...</p>
        ) : (
            <>
            <h1>{weatherData.location}</h1>
            <h3>{weatherData.country}</h3>
            <h1>{weatherData.celcius}</h1>
            <h3>{weatherData.condition}</h3>
            <img src={weatherData.icon}></img>
            <p>{console.log(weatherData)}</p>
            </>
        )
        }
    </div>
  )
}

export default ShowWeather