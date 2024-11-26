import { useState } from "react"
import { Link, useLoaderData } from "react-router-dom"

const Users = () => {

    const usersLoaded = useLoaderData()
    const [users, setUsers] = useState(usersLoaded)
    console.log(users)

    const handleDelete = (_id) => {
        console.log(_id)

        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount > 0) {
                    alert('user delete successfully')
                    const filterUser = users.filter(item => item._id !== _id)
                    setUsers(filterUser)
                }
            })
    }

    return (
        <div className="mt-20">
            <div className="">
                <p>User: {users.length}</p>
                {users && users.map(user => <div className="text-center "
                    key={user._id}>
                    <div className="border-2 flex justify-around">
                        <div className="">
                            <p>User Name: {user.name}</p>
                            <p>User email: {user.email}</p>
                        </div>
                        <div className="btn border-2 border-white">
                            <button onClick={() => handleDelete(user._id)}>Delete</button>
                            <Link to={`/update/${user._id}`}><button className="btn">Update</button></Link>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Users
