import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
    let [date, setDate] = useState('')

    useEffect(() => {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        setDate(`${mm}/${dd}`);
    }, [date])

    return (
        <header>
            <section id='date-display' className='header-compartment'>{date}</section>
            <section className='header-compartment'>Weather Here</section>
        </header>
    )
}

export default Header
