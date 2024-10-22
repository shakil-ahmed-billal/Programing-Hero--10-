import PropTypes from 'prop-types'

const Phone = ({mobile}) => {

    const {brand , price} = mobile

  return (
    <div>
        <h2>Phone: {brand}</h2>
        <p>Price: {price}</p>
    </div>
  )
}

Phone.propTypes = {
    mobile: PropTypes.object
}

export default Phone