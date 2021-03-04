import React, { useState, useEffect } from 'react'
import Header from './Components/Header/Header'
import Clock from './Components/Clock/Clock'
import CryptoPrices from './Components/CryptoPrices/CryptoPrices'
import './App.css';

const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

function App() {
  let [cheatDisplay, setCheatDisplay] = useState(false)

  useEffect(() => {
    const userInput = []

    window.addEventListener('keydown', event => {

      if(event.key === 'Enter'){
        if(JSON.stringify(userInput) === JSON.stringify(konami)){
          console.log('It matches!')
        }
      } else {
        userInput.push(event.key)
      }
    })
  }, [])

  return (
    <div className='App'>
      <Header />
      <Clock />
      <CryptoPrices />
    </div>
  );
}

export default App;
