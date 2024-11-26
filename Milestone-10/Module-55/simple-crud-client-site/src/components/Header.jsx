import { Link } from "react-router-dom"


const Header = () => {
    return (
        <div>
            <ul className="flex gap-5">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/users'}>Users</Link></li>
                <li><Link to={'/'}>Home</Link></li>
            </ul>
        </div>
    )
}

export default Header




