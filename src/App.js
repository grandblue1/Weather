import react from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import  Card  from './card';
import {Dna, InfinitySpin, RotatingLines, TailSpin } from 'react-loader-spinner';
import './App.css';
import Search from './Search';
import Select from 'react-select';
import Component from './Component';
import Error from './Error';
import s from './index.css';
function App(){
  
  const [fetchCity, setFetchCity] = useState('Киев');
  const [getWeather, setWeather] = useState();
  const [isLoading, setLoading] = useState(true);
 

  useEffect(() => {
    const get_weather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ fetchCity}&lang=ru&units=metric&appid=${process.env.REACT_APP_MYVAR}`)
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
      <Error>
    
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
    </Error>
  </div>
  
  </div>
  ) :
     (
      
      <TailSpin
  height="100"
  width="100%"
  color="#4fa94d"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    )
    }  
export default App;