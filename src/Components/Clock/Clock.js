import React, { useState, useEffect, useCallback } from 'react'
import './Clock.css'

const Clock = () => {
    let [time, setTime] = useState('')

    const updateTime = num => {
        if(num < 10){
            return '0' + num;
        } else {
            return num;
        }
    }

    const currentTime = useCallback(() => {
        let date = new Date();
        let hour = date.getHours();
        let min = date.getMinutes();
        let seconds = date.getSeconds();
        let timeOfDay = 'AM';
        timeOfDay = hour >= 12 ? 'PM' : 'AM'
    
        hour = (hour === 0) ? 12 : (hour > 12) ? hour - 12 : hour;
        hour = updateTime(hour)
        min = updateTime(min)
        seconds = updateTime(seconds)

        setTime(`${hour}:${min}:${seconds} ${timeOfDay}`)
    }, [])

    useEffect(() => {
        currentTime()
        setTimeout(function(){ currentTime() }, 1000)
    }, [time, currentTime])

    return (
        <section id='clock-display'>{time}</section>
    )
}

export default Clock
