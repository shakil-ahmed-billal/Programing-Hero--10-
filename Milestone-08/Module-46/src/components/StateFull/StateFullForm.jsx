import { useState } from "react"

const StateFullForm = () => {

    const [name , setName] = useState('');
    const [email , setEmail]= useState(null);
    const[ password , setPassword] = useState(null);
    const [error , setError] = useState()

    const handleSubmit = (e)  =>{
        e.preventDefault()
        if(password.length <6){
            setError('password must be 6 character or long')
        }
        else{
            setError(undefined)
        }
        console.log(name , email , password);

    }
    const handleName = (e) =>{
        setName(e.target.value)
    }
    const handleEmail = (e) =>{
        // console.log(e.target.value);
        setEmail(e.target.value)
    }
    const passwordHandle = (e) =>{
        setPassword(e.target.value)
    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input value={name} onChange={handleName} className="input" name="name"  type="text" /><br />
            <input onChange={handleEmail} type="email" name="email" /><br />
            <input onChange={passwordHandle} type="password" name="password"  required/> <br />
            <input className="" type="submit" value="Submit" />
            {
                error&& <p>{error}</p>
            }
        </form>
    </div>
  )
}

export default StateFullForm