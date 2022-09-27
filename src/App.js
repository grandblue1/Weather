import react from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import  Card  from './card';
import { Audio } from 'react-loader-spinner';
import './App.css';
import Search from './Search';
import Select from 'react-select';
import Component from './Component';
import Error from './Error';
function App(){
  const api = 'e2496cef2d93ba16a13742600609604a';
  const [fetchCity, setFetchCity] = useState('Киев');
  const [getWeather, setWeather] = useState();
  const [isLoading, setLoading] = useState(true);
 

  useEffect(() => {
    const get_weather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ fetchCity}&lang=ru&units=metric&appid=${process.env.KEY}`)
    const data = await response.json();
    setWeather({...data});
    setLoading(false);
   // setFetchCity("");
    
  }
  
  get_weather();
  
  console.log(getWeather);

},[isLoading]) 


return getWeather && !getWeather.message ? (
  <div className='App'>
      
        <div>
        <h2>
        <title>Weather-app</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    </h2>
    
    <Card 
    city={getWeather.name}
    country={getWeather.country}
    description = {getWeather.weather[0].description}
    temp={getWeather.main.temp}
    feels_like={getWeather.main.feels_like}
    icon={getWeather.weather[0].icon}

    />
    <Search value={fetchCity}     onFocus={e => {e.target.value =" "}}
   onChange={e => setFetchCity(e.target.value)} onKeyDown={e => e.keyCode === 13 && setLoading(!isLoading)}/>
  </ div></div>
 ): getWeather && getWeather.message ?(
  <div className='App' margin="auto" text-align="center">
    <div >
      <h2>City not Found,possible you may not delete spaces</h2>
    <Search
        value={fetchCity} 
        onFocus={(e) => {
          e.target.value = ''
        }}
        onChange={(e) => setFetchCity(e.target.value)}
        onKeyDown={(e) => {
          e.keyCode === 13 && setLoading(!isLoading);
        }}
    />
  </div></div>
  ) :
     (
      <div className='App'>
           <div><Audio margin='auto' text-align='center' height="80" width="80" radius="9" color="green" ariaLabel="loading" wrapperStyle wrapperClass
    /></div>
            </div>)
    }  
export default App;