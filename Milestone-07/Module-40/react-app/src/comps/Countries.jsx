import { useEffect } from "react";
import { useState } from "react"
import Country from "./Country";
import './Country.css'

const Countries = () => {

    const [countries , setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    })

  return (
    <div>
        <h1>Countries: {countries.length}</h1>
        <div className="countrys">
        {
            countries.map(country => <Country key={country.cca3} country={country}></Country>)
        }
        </div>
    </div>
  )
}

export default Countries