
const User = ({user}) => {

    const {name , email , id , phone} = user ;

  return (
    <div className=" border-2 p-5 rounded-3xl m-5 border-yellow-200">
        <h2>{name}</h2>
        <p>email: {email}</p>
        <p>Phone: {phone}</p>
    </div>
  )
}

export default User