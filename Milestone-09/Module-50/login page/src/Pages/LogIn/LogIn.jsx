import {sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './../../authentication/firebase.init';
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {

  const [user , setUsers] = useState(false)
  const [error , setError] = useState('')
  const emailRef = useRef()

  const handleLogin = (event) =>{
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value
    console.log(email , password);

    // error and user message clear
    setError('')
    setUsers(false)

    // log in users section
    signInWithEmailAndPassword(auth , email , password)
    .then(res=>{
      console.log(res.user);

      if(!res.user.emailVerified){
        setError('please verify your email address')
      }else{
        setUsers(true)
      }
    })
    .catch(error=>{
      setError(error.message)
    })
  }
  console.log();
  const handlePassword = ()=>{
    sendPasswordResetEmail(auth , emailRef.current.value)
    .then(() =>{
      alert('Password reset email send')
    }).catch(error=>{
      setError(error.message)
    })
  }
  return (

    <div className="hero bg-base-200 h-[calc(100vh-338px)]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <div className="">{user?<h1 className="text-5xl text-green-500  font-bold"> SuccessFully Log In Users !</h1>: <h1 className="text-5xl font-bold">Login now!</h1>}</div>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a onClick={handlePassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              {error&& <p className="text-center text-red-500">{error}</p>}
            </div>
          </form>
          <p className="text-center pb-2">New to this website Please <Link className="btn ml-2" to={'/signup'}>Sign UP</Link></p>
        </div>
      </div>
    </div>
  )
}

export default LogIn