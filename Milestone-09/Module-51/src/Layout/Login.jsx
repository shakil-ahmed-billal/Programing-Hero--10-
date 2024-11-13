import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'

const Login = () => {

    const {userLogIn ,signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = (event) =>{
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email , password);

        // user log in function
        userLogIn(email , password)
        .then(res =>{
            console.log(res.user);
            event.target.reset()
            navigate('/order')
        }).catch(error =>{
            console.log(error.message);
        })
    }
    const handleLoginGoogle = () =>{
        signInWithGoogle()
        .then(res =>{
            console.log(res.user);
        }).catch(error=>{
            console.log(error.message);
        })
    }

    return (
        <div>
            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email'  className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleLoginGoogle} className="btn btn-primary">Login With Google</button>
                            </div>
                            <p className='text-center'>New to this website Please <Link className='btn' to={'/register'}>Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login