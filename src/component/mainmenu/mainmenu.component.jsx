import React from 'react';
import SearchBar from '../searchbar/searchbar.compenent';
import { useContext } from 'react';

import { WeatherContext } from '../../context/weatherContext';
import './mainmenu.styles.scss'

const Mainmenu = () => {
    const {weatherData} = useContext(WeatherContext)
    const city = weatherData ? `${weatherData.name}, ${weatherData.sys.country}` : 'Ankara, TR';
    const temp = weatherData ? `${Math.round(weatherData.main.temp)}` : '21 °C';
    const desc = weatherData ? `${weatherData.weather[0].main}` : 'Sunny';
    const minmax = weatherData ? `${Math.round(weatherData.main.temp_min)} °C , ${Math.round(weatherData.main.temp_max)} °C` : '13 °C / 22 °C';
  
  
    return (
        <div>
            <div className='app'>
                <div className="header">
                    <h1>Weather Forecast</h1>
                    <SearchBar/>
                </div>
                <div className="content">
                    <div className="city">{city}</div>
                    <div className="temp">{temp} °C </div>
                    <div className="desc">{desc}</div>
                    <div className="minmax">{minmax}</div>
                   
                </div>
            </div>
        </div>
    );
}

export default Mainmenu;
