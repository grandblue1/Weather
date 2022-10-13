import React from "react";
import s from "./styles/card.module.css";
import Search from "./Search.jsx";
import Select from 'react-select';
const Card = ({city, country, temp, feels_like, description, icon ,lang}) => {
    //http://openweathermap.org/img/wn/${icon}.png
    return(
        <div className={s.card}>
            <div className={s.name}>
                <h1>{city}, {country}</h1>
                <h2>{description}</h2>
            </div>
            <div>
                
                <img className={s.img}
                    width="300px"
                    height="300px"
                    objectFit="cover"
                    src={`/animated/${icon}.svg`}
                    alt="Icon"
                    
                />
                
            </div>
            <div className={s.temp}>
                <div>{Math.round(Number(temp))} °C</div>
                <div>Feels like {Math.round(Number(feels_like))}°C</div>
            </div>
            
        </div>
    );
};
export default Card;