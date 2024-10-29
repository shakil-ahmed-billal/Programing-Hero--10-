
import { useLoaderData } from 'react-router-dom';
const UsersDetails = () => {

    const users = useLoaderData();
    const {name , website}= users

  return (
    <div>
        <p>details about users: {name}</p>
        <p>WebSite : {website} </p>
    </div>
  )
}

export default UsersDetails