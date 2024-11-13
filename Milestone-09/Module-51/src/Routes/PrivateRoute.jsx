import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {users , loading} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-ball loading-lg"></span>;
    }
    if(users){
        return children;
    }else{
        return <Navigate to={'/login'}></Navigate>
    }
}

export default PrivateRoute