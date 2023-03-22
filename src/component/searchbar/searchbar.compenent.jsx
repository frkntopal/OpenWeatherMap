import './searchbar.styles.scss'

import axios from 'axios';
import React, { useState, useRef,useContext } from 'react';
import { WeatherContext } from '../../context/weatherContext';


const SearchBar = () => {
const { saveWeatherData } = useContext(WeatherContext);
  const [city, setCity] = useState('');  
  const inputRef = useRef();

  const handleInputChange = (event) => {
    setCity(event.target.value);    
  };  

  const handleSearch = async (event) => {
    event.preventDefault();
  
    const url = 'https://api.openweathermap.org/data/2.5/weather';
    const key = '9e06b5a1281bc72228b7f14c9e850bb5';

    try {
      const response = await axios.get(`${url}?q=${city}&appid=${key}&units=metric`);      
      inputRef.current.value='';
      console.log(response.data);
      saveWeatherData(response.data);      
    } catch (error) {
      console.error(error);     
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="search" id="searchBar" placeholder="Enter the city" ref={inputRef} value={city} onChange={handleInputChange} />
    </form>
  );
};

export default SearchBar;
