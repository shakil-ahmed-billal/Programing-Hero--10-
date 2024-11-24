import { useEffect, useState } from 'react'

import './App.css'

function App() {
  
  const [ users , setUses] = useState([])
  console.log(users);
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setUses(data)
    })
  },[])

  const handleAddUser = (event) =>{
    event.preventDefault()
    const form = event.target ;
    const name = form.name.value ;
    const email = form.email.value ;
    const user = {name , email}
    console.log(user);
    fetch('http://localhost:5000/users' ,{
      method: 'POST' ,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(res => res.json())
    .then(data  =>{
      console.log(data);
      const newUser = [...users , data]
      setUses(newUser)
      form.reset()
    })
  }

  return (
    <>
      <h1>User management </h1>
      <p>User: {users.length}</p>
      <form onSubmit={handleAddUser} action="">
        <input type="text" name='name' id='' /><br />
        <input type="email" name='email' id='' /><br />
        <input type="submit" value='Add User' /><br />
      </form>
      <div className="">
        {
          users.map(user => <p key={user.id}>{user.id}| {user.name} {user.email}</p>)
        }
      </div>
    </>
  )
}

export default App


