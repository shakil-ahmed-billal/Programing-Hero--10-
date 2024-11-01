
const SimpleForm = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('form submit' , e.target.name.value);
        console.log('form submit' , e.target.email.value);
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input className="input" name="name"  type="text" /><br />
            <input  type="email" name="email" placeholder="email" /><br />
            <input type="phone" /> <br />
            <input className="" type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default SimpleForm