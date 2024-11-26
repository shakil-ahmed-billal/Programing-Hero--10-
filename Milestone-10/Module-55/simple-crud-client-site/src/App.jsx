
import './App.css'

function App() {

  const handleUser = (event) =>{
    event.preventDefault()
    const form = event.target ;
    const email = form.email.value;
    const name = form.name.value;
    const user = {name , email}

    // send data for server site
    fetch('http://localhost:5000/users' , {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        alert("user added")
        form.reset()
      }
    })
    
  }


  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <form  onSubmit={handleUser} className='mt-20 border-2'>
            <label htmlFor="">Name</label>
            <input type="text" className='border-2' name="name" id="" /><br />
            <label htmlFor="">Email</label>
            <input type="email" className='border-2' name="email" id="" /><br />
            <button className='btn'>Add user</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
