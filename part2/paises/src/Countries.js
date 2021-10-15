import { useState } from "react"
import { Toggable } from "./Toggable"
import { Country } from "./Country"
export const Countries=(props)=>{
   
    var {filteredCountries}=props
    if(filteredCountries.length>10){
        return(
            <div>
                <p>Too many matches specify another filter</p>
            </div>
        )
    }
  
    if(filteredCountries.length>1 ){
        return(
            <div>
          
          {filteredCountries.map((country)=>(
            <div>
            <li key={country.name.common}> {country.name.common}</li>
            <Toggable buttonLabel="show">
            <Country country={country}/>
            </Toggable>
            <div>
            
            </div>
            
            </div>
            
          ))}
        </div>
        )
    }
    //console.log(filteredCountries)
    
    //const country=filteredCountries[0];
    //console.log(country)
    //const languages=country.languages;
   /* <ul>
                    {languages.map((language)=>(
                        <li key={language.name}>{language.name}</li>
                    ))}
                </ul>*/
    return(
       
        <div>
            {filteredCountries.map((country)=>{
                
                return(
                    
                <div key={country.name.common}>
                    <h2>{country.name.common}</h2>
                    <Country country={country}/>


                </div>
                )
                
            })}
            

        </div>
    )
    

}