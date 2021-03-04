import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './CryptoPrices.css'

const CryptoPrices = () => {
    let [prices, setPrices] = useState({})

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin,litecoin&vs_currencies=usd')
        .then(res => setPrices(res.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <section id='crypto-flex'>
            <div className='crypto-display'>BTC ${prices.bitcoin?.usd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
            <div className='crypto-display'>ETH ${prices.ethereum?.usd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
            <div className='crypto-display'>LTC ${prices.litecoin?.usd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        </section>
    )
}

export default CryptoPrices
