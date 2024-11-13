import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider"

const Register = () => {

    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = (event) =>{
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email , password , name);

        // create a new user section
        createUser(email , password)
        .then(res=>{
            console.log('users log in successfully', res.user)
            event.target.reset()
            navigate('/login')
        }).catch(error =>{
            console.log(error.message);
        })
    }

    return (
        <div>
            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name'  className="input input-bordered" required />
                            </div>
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
                                <button className="btn btn-primary">Register Now</button>
                            </div>
                            <p className='text-center'>Already have a account<Link className='btn' to={'/login'}>Log In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register