import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Phones = () => {

    const phone = useLoaderData()
    console.log(phone);

  return (
    <div>Phones : {phone.length}</div>
  )
}

export default Phones