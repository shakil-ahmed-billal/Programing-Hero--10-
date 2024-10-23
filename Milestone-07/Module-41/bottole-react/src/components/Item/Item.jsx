import PropTypes from 'prop-types'
import './item.css'
const Item = ({item , handleCart}) => {
    const {name , img , price} = item ;
  return (
    <div className='item'>
        <h3>Bottle: {name}</h3>
        <img src={img} alt="" />
        <p>Price: ${price}</p>
        <button onClick={()=>handleCart(item)}>Purchase</button>
    </div>
  )
}

Item.propTypes = {
    item: PropTypes.object,
    handleCart: PropTypes.func
}

export default Item