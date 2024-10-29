import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div>
        <nav>
            <ul className="flex gap-5 justify-center">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/Posts'>Posts</NavLink>
                <NavLink to='/users'>Users Us</NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default Header