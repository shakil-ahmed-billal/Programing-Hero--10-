import { useState } from 'react'
import './App.css'
import Phone from './components/sunglass/Phone/Phone'
import Sunglass from './components/sunglass/Sunglass/Sunglass'
import { useEffect } from 'react';


function App() {

  const [phone , setPhone] = useState([]);
  useEffect(()=>{
    fetch('phone.json')
    .then(res => res.json())
    .then(data => setPhone(data))
  } ,[])


  return (
    <>
      <p>name</p>
      <Sunglass></Sunglass>
      {
        phone.map(mobile => <Phone key={mobile.id} mobile={mobile}></Phone>)
      }
    </>
  )
}

export default App
