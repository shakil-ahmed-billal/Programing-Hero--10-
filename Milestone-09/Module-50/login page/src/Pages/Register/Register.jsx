import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './../../authentication/firebase.init';
import { useState } from "react";

const Register = () => {

    const [users , setUsers] = useState(false)

    const handleRegister = (event) =>{

        // users status update..
        setUsers(false)

        // users register information
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
      

        createUserWithEmailAndPassword(auth , email , password)
        .then(res=>{
            console.log('users log in done');
            setUsers(true)
        })
        .catch(error =>{
            console.log('ERROR', error);
        })
    }


    return (
        <div>
            <div className="card bg-base-100 w-full mx-auto py-10  max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleRegister} className="card-body">
                    {users?<p className="text-center text-xl font-bold text-green-400">Successfully register information</p>: <p className="text-center text-xl font-bold mb-5">Please Register your information</p>}
                   
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
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register