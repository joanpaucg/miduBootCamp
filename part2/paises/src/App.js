import React from 'react';
import './App.css';
import { useState,useEffect } from 'react';
import axios from "axios"
import { Countries } from './Countries';

function App() {
  const[ countries, updateCountries]=useState([]);
  const [searchText,updateSearchText]=useState("");
  const handleSearchText=(event)=>{
    updateSearchText(event.target.value);

  }
  const filteredCountries=countries.filter((country)=>country.name.official.toLowerCase().includes(searchText.toLowerCase()))
  useEffect(()=>{
    axios
    .get("https://restcountries.com/v3.1/all")
    .then((response)=>{
      const {data}=response;
      //console.log(data[0])
      
      updateCountries(data);
    })
  },[]

  )
  return (
    <div>
      <div>
      Find countries <input value={searchText} onChange={handleSearchText}/>
    </div>
    <h1>Countries</h1>
      <Countries filteredCountries={filteredCountries}/>
    </div>
    
  );
}

export default App;
