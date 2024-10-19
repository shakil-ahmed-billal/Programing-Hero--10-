import React from 'react'

export default function Friend({friend}) {

    console.log(friend);
  return (
    <div>
        <div className="box">
            <p>Name:{friend.name}</p>
            <p>Username: {friend.username}</p>
            <p>Email: {friend.email}</p>
        </div>
    </div>
  )
}

