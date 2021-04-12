import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country';
import Cart from './components/Country/Cart/Cart';
import cityData from './data/data.json'

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);


  const [city, setCity] = useState([]);

  useEffect(() =>{
    setCity(cityData);
    console.log(cityData);
  }, [])


  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data =>setCountries(data))
    // .catch(error => console.log(error))
  }, [])

  // const handleAddCountry = () => {console.log('country added')}
  // const handleAddCountry5 = (country9) => {console.log('country added', country9)}
  const handleAddCountry5 = (country7) => {
    const newCart = [...cart, country7];
    setCart(newCart);
  }


  return (
    <div className="App">
      <h1>Country Loaded : {countries.length}</h1>
      <h2>Country added : {cart.length}</h2>
      <Cart cart2={cart}></Cart>
        {
          countries.map(country5 => <Country  
            country6={country5} 
            key={country5.alpha3Code}
            handleAddCountry6={handleAddCountry5}
            >

            </Country> )
          // countries.map(country => <Country  
          //   country={country} 
          //   key={country.alpha3Code}
          //   handleAddCountry={handleAddCountry}
          //   >

          //   </Country> )
        }
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
