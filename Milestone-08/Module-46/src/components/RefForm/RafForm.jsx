import { useEffect, useRef } from "react"

const RafForm = () => {
    const nameRef = useRef(null)
    const emailRef  = useRef(null)
    const passRef  = useRef(null)

    useEffect(()=>{
        nameRef.current.focus();
    },[])

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passRef.current.value);
    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input ref={nameRef} className="input" name="name"  type="text" /><br />
            <input defaultValue={'rojoni@sojoni'} ref={emailRef} type="email" name="email" /><br />
            <input ref={passRef} type="password" name="password"/> <br />
            <input className="" type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default RafForm