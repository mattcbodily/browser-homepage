import Header from './Components/Header/Header'
import Clock from './Components/Clock/Clock'
import CryptoPrices from './Components/CryptoPrices/CryptoPrices'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Clock />
      <CryptoPrices />
    </div>
  );
}

export default App;
