import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <div style={{'marginRight':'25px'}} className="">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/'}>Contact</NavLink>
        <NavLink to={'/Login'}>Log In</NavLink>
      </div>
    </div>
  )
}

export default Header