import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Header.css'

const Header = () => {
    let [date, setDate] = useState('')
    let [coords, setCoords] = useState({})
    let [weather, setWeather] = useState({})

    let monthNames =["January","February","March","April",
    "May","June","July","August",
    "September", "October","November","December"];

    useEffect(() => {
        let today = new Date()
        let dd = today.getDate()
        let mm = today.getMonth()
        setDate(`${monthNames[mm]} ${dd}`)
    }, [date])
    
    useEffect(() => {

        if(window.navigator.geolocation && !coords.coords){
            window.navigator.geolocation.getCurrentPosition(setCoords)
        }

        if(coords.coords){
            axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${coords.coords.latitude}&lon=${coords.coords.longitude}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=imperial`)
            .then(res => setWeather(res.data))
            .catch(err => console.log(err))
        }
    }, [coords])

    return (
        <header>
            <section id='date-display' className='header-compartment'>{date}</section>
            <section className='header-compartment'>
                {weather.weather
                ? (<>
                    <p>{weather.main.temp.toFixed(0)}° {weather.weather[0].main}</p>
                    <p id='location'>{weather.name}</p>
                   </>)
                : null}
            </section>
        </header>
    )
}

export default Header
