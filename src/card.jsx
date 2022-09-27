import React from "react";
import s from "./styles/card.module.css";
import Search from "./Search";
import Select from 'react-select';
const Card = ({city, country, temp, feels_like, description, icon ,lang}) => {
    
    return(
        <div className={s.card}>
            <div className={s.name}>
                <h1>{city}, {country}</h1>
                <h2>{description}</h2>
            </div>
            <div>
                
                <img className={s.img}
                    width="300"
                    height="300"
                    objectFit="cover"
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
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