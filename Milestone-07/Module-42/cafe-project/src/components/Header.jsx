
// import PropTypes from 'prop-types'
import profile from '../assets/profile.png'

const Header = () => {
  return (
    <div className="xl:w-10/12 2xl:w-8/12 w-11/12 mx-auto mb-5">
        <div className="flex justify-between items-center my-3">
            <h1 className="md:text-3xl text-lg font-extrabold">Knowledge Cafe</h1>
            <div className="">
                <img src={profile} alt="" />
            </div>
        </div>
        <hr />
    </div>
  )
}

Header.propTypes = {}

export default Header