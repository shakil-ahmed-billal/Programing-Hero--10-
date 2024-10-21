import { useEffect } from "react";
import { useState } from "react"
import Country from "./Country";
import './Country.css'

const Countries = () => {

    const [countries , setCountries] = useState([]);
    const [visitedCountries , setVisitedCountries] = useState([])
    const [visitedFlags , setVisitedFlags] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    })

    const handleVisited = country =>{
        const newVisitedCountry = [...visitedCountries , country];
        setVisitedCountries(newVisitedCountry)
        
    }
    
    const handleImage = flags =>{
        const addNewFlags = [...visitedFlags , flags];
        setVisitedFlags(addNewFlags);
    }

  return (
    <div>
        <h2>Countries: {countries.length}</h2>
        <div className="">
            <h4>Visited Countries: {visitedCountries.length}</h4>
            <div>
                {visitedCountries.map(flags => <li key={flags.cca3}>name: {flags.name.common}</li>)}
            </div>
            <div className="">
                {
                    visitedFlags.map((flag , idx) => <img key={idx} src={flag}></img>)
                }
            </div>
        </div>
        <div className="countrys">
        {
            countries.map(country => <Country key={country.cca3} handleImage={handleImage} handleVisited={handleVisited} country={country}></Country>)
        }
        </div>
    </div>
  )
}

export default Countries