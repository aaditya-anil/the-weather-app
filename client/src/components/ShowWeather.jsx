import React, { useReducer } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import getCityWeather from '../services/WeatherService'


const ShowWeather = () => {
    const inputRef = useRef();
    const [city, setCity] = useState(localStorage.getItem("city")? localStorage.getItem("city"): "London");
    const [weatherData, setWeatherData] = useState(null)
    const [invalidCity, setInvalidCity] = useState(false);

    
    useEffect(()=>{
        async function fetchWeather() {
            const data = await getCityWeather(city)
            console.log(data);
            if(data.apiStatus == 200){
                setWeatherData(data)
                localStorage.setItem("city", city);
                setInvalidCity(false);
            }
            else{
                setInvalidCity(true);
            }
        }
        fetchWeather();
    },[city])

    function changeCity() {
        event.preventDefault()
        setCity(inputRef.current.value)
    }

  return (
    <div className='mainFrontend'>
        { !weatherData ? (
            <p>Loading...</p>
        ) : (
            <>
            <img src={weatherData.icon}></img>
            <h1>{weatherData.location}</h1>
            <h3>{weatherData.country}</h3>
            <h1>{weatherData.celcius}&deg;</h1>
            <h3>{weatherData.condition}</h3>
            <p>{console.log(weatherData)}</p>
            <br></br>
            <form onSubmit={changeCity}>
                <input type="text" ref={inputRef} placeholder='city name'/>
                { invalidCity ? (
                    <p>City not found</p>
                ) : (
                    <></>
                )}
            </form>

            </>
        )
        }
    </div>
  )
}

export default ShowWeather