
const ReusableForm = ({formTitle , handleSubmitData , children}) => {

    const handleLocal = e =>{
        e.preventDefault()
        const data = {
            name: e.target.name.value ,
            email : e.target.email.value ,
            password: e.target.password.value
        }
        handleSubmitData(data)
    }
    

  return (
    <div>
        {children}
        <form onSubmit={handleLocal}>
            <input className="input" name="name"  type="text" /><br />
            <input  type="email" name="email" placeholder="email" /><br />
            <input type="password"  name="password"/> <br />
            <input className="" type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default ReusableForm