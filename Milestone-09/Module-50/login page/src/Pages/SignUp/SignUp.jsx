import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useState } from "react"
import { auth } from "../../authentication/firebase.init";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {

  const [users, setUsers] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSignUp = (event) => {
    event.preventDefault()

    const name = event.target.name.value
    const photoUrl = event.target.url.value
    const email = event.target.email.value
    const password = event.target.password.value
    const terms = event.target.terms.checked

    console.log(name , photoUrl);
    // error message clear
    setErrorMessage('')
    setUsers(false)
    if(!terms){
      setErrorMessage('Please accept out terms and condition')
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be 6 character')
      return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage('at list 1 uppercase 1 lowercase 1 number 1 special character')
      return;
    }

    // create a users section
    createUserWithEmailAndPassword(auth, email, password)
      .then(res => {
        console.log(res);
        setUsers(true)

        // send verification
        sendEmailVerification(auth.currentUser)
        .then(()=>{
          alert('send verification');
        })
        // update users profile
        const profile = {
          displayName : name,
          photoURL : photoUrl
        }
        updateProfile(auth.currentUser , profile)
        .then(() =>{
          console.log('users profile update');
        }).catch(error =>{
          setErrorMessage('users profile update error' , error.message)
        })
      })
      .catch(error => {
        setErrorMessage(error.message);
      })
  }

  return (
    <div>
      <div className="card bg-base-100 w-full mx-auto py-10  max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSignUp} className="card-body">
          {users ? <p className="text-center text-xl font-bold text-green-400">Successfully Sign Up This Account</p> : <p className="text-center text-xl font-bold mb-5">Create a New Account</p>}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name="url" placeholder="Photo Url" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" />
            <button onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-14 cursor-pointer">
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-5">
              <input type="checkbox" name="terms" className="checkbox" />
              <span className="label-text">Remember me</span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
            {errorMessage && <p className="text-center text-red-500">{errorMessage}</p>}
          </div>
        </form>
        <p className="text-center pb-2">Already Have a Account to <Link className="btn ml-2" to={'/login'}>Log in</Link></p>
      </div>
    </div>
  )
}

export default SignUp