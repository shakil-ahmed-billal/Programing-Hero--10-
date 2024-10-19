import React, { useEffect } from 'react'
import { useState } from 'react'
import './friends.css'
import Friend from './Friend'

export default function Friends() {
  const [friends , useFriends] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => useFriends(data))
  })

  return (
    <div className='box'>
      <h3>Friends: {friends.length}</h3>
      {
        friends.map(friend => <Friend friend={friend}></Friend>)
      }
    </div>
  )
}



