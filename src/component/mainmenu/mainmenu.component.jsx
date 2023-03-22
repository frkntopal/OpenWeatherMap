import React from 'react';
import SearchBar from '../searchbar/searchbar.compenent';
import { useContext,useEffect } from 'react';

import { WeatherContext } from '../../context/weatherContext';
import './mainmenu.styles.scss'
import Forecast from '../forecast/forecast.component';

const Mainmenu = () => {
    const {weatherData} = useContext(WeatherContext)
    const city = weatherData ? `${weatherData.name}, ${weatherData.sys.country}` : 'Ankara, TR';
    const temp = weatherData ? `${Math.round(weatherData.main.temp)}` : '21 °C';
    const desc = weatherData ? `${weatherData.weather[0].main}` : 'Sunny';
    const minmax = weatherData ? `${Math.round(weatherData.main.temp_min)} °C , ${Math.round(weatherData.main.temp_max)} °C` : '13 °C / 22 °C';

    const setBackground = (desc) => {
        const body = document.body;
      
        if (desc === "Sunny") {
          body.style.backgroundImage = "url('https://i.pinimg.com/originals/d5/e2/14/d5e2148a83dd91f30aff3e24364d79c6.gif')"
          body.style.backgroundSize = "cover";
          body.style.backgroundPosition = "center center";
        } else if (desc === "Rain") {
            body.style.backgroundImage = "url('https://cdn.pixabay.com/animation/2023/02/25/01/14/01-14-55-999_512.gif')"
            body.style.backgroundSize = "cover";
            body.style.backgroundPosition = "center center";
        } else if (desc === "Clouds") {
          body.style.backgroundImage = "url('https://i.pinimg.com/originals/aa/96/97/aa9697a3f7a61389675b8dc109518753.gif')"
          body.style.backgroundSize = "cover";
          body.style.backgroundPosition = "center center";
        } else if (desc === "Clear") {
            body.style.backgroundImage = "url('https://cdn.pixabay.com/animation/2022/10/27/19/36/19-36-05-330_512.gif')"
            body.style.backgroundSize = "cover";
            body.style.backgroundPosition = "center center";
        } else if (desc === "Mist") {
          body.style.backgroundImage = "url('https://thumbs.gfycat.com/DeliciousUnfortunateCockroach-size_restricted.gif')"
          body.style.backgroundSize = "cover";
          body.style.backgroundPosition = "center center";
        }else if (desc === "Snow") {
          body.style.backgroundImage = "url('https://i.pinimg.com/originals/18/79/5b/18795b33a753070366251be58b2bc29a.gif')"
          body.style.backgroundSize = "cover";
          body.style.backgroundPosition = "center center";
        }else {
          body.style.backgroundColor = "white";
        }
      }
      useEffect(() => {
        setBackground(desc);
      }, [desc]);
  
  
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
                <Forecast/>
            </div>
        </div>
    );
}

export default Mainmenu;
