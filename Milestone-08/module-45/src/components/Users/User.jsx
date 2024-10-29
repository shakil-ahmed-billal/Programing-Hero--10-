import { Link } from "react-router-dom";

const User = ({user}) => {

    const {name , email , id , phone} = user ;

  return (
    <div className=" border-2 p-5 rounded-3xl m-5 border-yellow-200">
        <h2>{name}</h2>
        <p>email: {email}</p>
        <p>Phone: {phone}</p>
       <div className="flex justify-center items-center gap-5 my-5">
       <Link to={`/user/${id}`}>Show Details</Link>
       <Link to={`/user/${id}`}>
       <button >Click Me</button>
       </Link>
       </div>
    </div>
  )
}

export default User