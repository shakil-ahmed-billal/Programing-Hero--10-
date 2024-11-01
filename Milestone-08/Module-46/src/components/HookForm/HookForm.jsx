import useInputState from "../../Hooks/useInputState";



const HookForm = () => {


    // const [name , handleName] = useInputState('rojoni klanto')

    const emailState = useInputState('rojoniklanto@gmail.com')

    const handleSubmit = (e) =>{
        console.log('form submit' , emailState);
        e.preventDefault();
    }

  return (
    <div>
        <form onSubmit={handleSubmit} >
            {/* <input value={name} onChange={handleName} className="input" name="name"  type="text" /><br /> */}
            <input {...emailState}  type="email" name="email" placeholder="email" /><br />
            <input type="phone" /> <br />
            <input className="" type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default HookForm