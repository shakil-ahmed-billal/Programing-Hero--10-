import { useLoaderData } from "react-router-dom"

const Update = () => {

    const loaderData = useLoaderData()
    console.log(loaderData)

    const handleUpdate = (event) =>{
        event.preventDefault()

        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const userUpdate = {name , email}

        console.log(userUpdate)
        fetch(`http://localhost:5000/users/${loaderData._id}`,{
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(userUpdate)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          if(data.modifiedCount>0){
            alert('user update successfully')
          }
        })

    }

  return (
    <div>
      <div className="">
        <p>Update information {loaderData.name}</p>
        <div className="">
            <form onSubmit={handleUpdate} action="">
                <input defaultValue={loaderData.name} className="border-2 border-white" type="text" name="name" id="" /><br />
                <input defaultValue={loaderData.email} className="border-2 border-white" type="text" name="email" id="" /><br />
                <input className="btn" type="submit" value="Update User" />
            </form>
        </div>
      </div>
    </div>
  )
}

export default Update
