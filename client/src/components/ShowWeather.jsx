import React, { useReducer } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import getCityWeather from '../services/WeatherService'


const ShowWeather = () => {
    const inputRef = useRef();
    const [city, setCity] = useState(localStorage.getItem("city")? localStorage.getItem("city"): "London");
    const [weatherData, setWeatherData] = useState(null)

    
    useEffect(()=>{
        async function fetchWeather() {
            const data = await getCityWeather(city)
            if(data.apiStatus == 200){
                setWeatherData(data)
                localStorage.setItem("city", city);
            }
        }
        fetchWeather();
    },[city])

    function changeCity() {
        event.preventDefault()
        setCity(inputRef.current.value)
    }

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
            <form onSubmit={changeCity}>
                <input type="text" ref={inputRef}/>
            </form>
            </>
        )
        }
    </div>
  )
}

export default ShowWeather