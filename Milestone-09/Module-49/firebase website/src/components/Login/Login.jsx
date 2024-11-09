import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    const provider = new GoogleAuthProvider();
    const handleGoogleSingIn = () =>{
        
        console.log('google Sing In provider');
    }
  return (
    <div>
        <button onClick={handleGoogleSingIn}>Log in with google</button>
    </div>
  )
}

export default Login