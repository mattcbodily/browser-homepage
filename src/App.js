import React, { useState, useEffect } from 'react'
import Header from './Components/Header/Header'
import Clock from './Components/Clock/Clock'
import CryptoPrices from './Components/CryptoPrices/CryptoPrices'
import SecretMenu from './Components/SecretMenu/SecretMenu'
import './App.css';

const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

function App() {
  let [cheatDisplay, setCheatDisplay] = useState(false)

  useEffect(() => {
    const userInput = []

    window.addEventListener('keydown', event => {

      if(event.key === 'Enter'){
        if(JSON.stringify(userInput) === JSON.stringify(konami)){
          setCheatDisplay(true)
          userInput.splice(0)
        }
      } else {
        userInput.push(event.key)
      }
    })
  }, [])

  return (
    <div id='mountain' className='App'>
      <Header />
      <Clock />
      <CryptoPrices />
      {cheatDisplay
        ? <SecretMenu showMenu={setCheatDisplay} />
        : null}
    </div>
  );
}

export default App;
