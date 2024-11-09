import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { auth } from "../../authentication/firebase.init";

const SignUp = () => {

  const [users , setUsers] = useState(false);
  const [errorMessage , setErrorMessage] = useState('')

  const handleSignUp = (event) =>{
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    
    // error message clear
    setErrorMessage('')
    setUsers(false)

    if(password.length < 6){
      setErrorMessage('Password must be 6 character')
      return;
    }else{
      createUserWithEmailAndPassword(auth , email , password)
      .then(res => {
        console.log(res);
        setUsers(true)
      })
      .catch(error =>{
        setErrorMessage(error.message);
      })
    }
  }

  return (
    <div>
      <div className="card bg-base-100 w-full mx-auto py-10  max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSignUp} className="card-body">
          {users ? <p className="text-center text-xl font-bold text-green-400">Successfully Sign Up This Account</p> : <p className="text-center text-xl font-bold mb-5">Create a New Account</p>}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered"/>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
            {errorMessage&& <p className="text-center text-red-500">{errorMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp