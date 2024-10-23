import PropTypes from 'prop-types'
import './cart.css'

const Cart = ({cart , removeCart}) => {
  return (
    <div className=''>
        <h2>Cart Product : {cart.length} </h2>
        <div className="cart">
        {cart.map((bottle, idx) => <div key={idx}><img key={idx} src={bottle.img}></img><button onClick={()=>removeCart(bottle.id)}>Remove</button></div>)}
        </div>
    </div>
  )
}

Cart.propTypes = {
    cart: PropTypes.object,
    removeCart: PropTypes.func
}

export default Cart