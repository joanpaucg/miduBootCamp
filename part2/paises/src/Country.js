import axios from "axios";
import React, { useEffect, useState } from "react";
export const Country=(props)=>{
    const {country}=props
    const [weatherData,setWeatherData]=useState({})
    const  WEATHER_API_KEY=process.env.REACT_APP_WEATHER_API_KEY
    const WEATHER_API_URL="http://api.weatherstack.com/current?access_key="+WEATHER_API_KEY+"&query="+[country.capital]
    //console.log(country)
    /*useEffect(()=>{
        axios
        .get(WEATHER_API_URL)
        .then(response=>{
            const {data}=response
            setWeatherData(data)
            //console.log(WEATHER_API_URL)
            //console.log(data)
        })
    },[]

    )*/
    useEffect(()=>{
        axios
        .get( WEATHER_API_URL)
        .then((response)=>{
          const {data}=response;
          //console.log(data[0])
          console.log( WEATHER_API_URL)
         setWeatherData(data);
        })
      },[]
    
      )
        return(
                    
            <div>
            <p><strong>Capital</strong> {[country?.capital]} </p>
            <p><strong>Population</strong> {country?.population}</p>
            <h3>Languages</h3>
            <div>
                <ul>
                    {
                        Object.values(country?.languages).map(lang=>{
                            return(
                                <li key={lang}>{lang}</li>
                            )
                        })
                    }
                </ul>
                <img src = {country?.flags['png']} ></img>
            </div>
            <h4><strong>Weather in {[country?.capital]}</strong></h4>
            
            <p><strong>Temperature: {weatherData?.current?.temperature} Celcius </strong></p>
            <img src={[weatherData?.current?.weather_icons]}></img>
            <p><strong>Wind: {weatherData?.current?.wind_speed} mph direction {weatherData?.current?.wind_dir}</strong></p>


    
            </div>        
        
        )

   
    
}