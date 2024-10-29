import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
        <nav>
            <ul className="flex gap-5 justify-center">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/price'>Price</Link>
                <Link to='/users'>Users Us</Link>
            </ul>
        </nav>
    </div>
  )
}

export default Header