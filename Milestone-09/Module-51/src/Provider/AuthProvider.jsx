import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { auth } from "../authentication/firebase.init"

export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {


    const [users , setUsers] = useState(null)
    const [loading , setLoading] = useState(true)

    const createUser = (email , password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const userLogIn = (email , password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }
    const signInWithGoogle = ()=>{
        signInWithPopup(auth , provider )
    }
    const signOutUser = ()=>{
        return signOut(auth)
    }
    // onAuthStateChanged(auth , currentUser =>{
    //     if(currentUser){
    //         console.log('currently log in' , currentUser);
    //         setUsers(currentUser)
    //     }else{
    //         console.log('no users log in');
    //         setUsers(null)
    //     }
    // })

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            console.log(currentUser);
            setUsers(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    })
    

 
    const authInfo = {
        users,
        loading,
        userLogIn,
        signOutUser,
        createUser,
        signInWithGoogle,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {/* main part who will have access to this context*/}
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

/**
 * 1 create context with null as default
 * 2. create provider
 * 3. set a default value (auth info)
 * 4. [attention please!!!!]
 * 5. use the authProvider in the </main.jsx 
 * 6. access the children
 */