import { useLoaderData } from "react-router-dom"
import User from "./User";

const Users = () => {

    /**
     * users 
     * use effect
     * fetch -->  state set -->set state
     */

    const users = useLoaderData();

  return (
    <div>
        <h2>Out Users section Data : {users.length}</h2>
        <div className="grid grid-cols-3 gap-5 border-2 rounded-3xl">
        {
            users.map(user => <User key={user.id} user={user}></User>)
        }
        </div>
    </div>
  )
}

export default Users