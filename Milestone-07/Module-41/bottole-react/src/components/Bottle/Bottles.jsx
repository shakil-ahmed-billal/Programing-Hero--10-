import { useEffect } from 'react'
import { useState } from 'react'
import Item from '../Item/Item'
import './bottle.css'
import { addCart, getStorage, removeCartItem } from '../../Utility/storage'
import Cart from '../cart/Cart'

const Bottles = () => {

    const [bottles , setBottles] = useState([])
    const [bottleCart , setBottleCart] = useState([])

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    useEffect(()=>{
        if(bottles.length){

            const storeCartID = getStorage();

            const saveCartItem = [];

            for(const id of storeCartID){
                const newBottle = bottles.find(bottle => bottle.id === id)

                if(newBottle){
                    saveCartItem.push(newBottle)
                }

            }
            setBottleCart(saveCartItem)
        }
    },[bottles])

    const handleCart = (bottle) =>{
        const newCart = [...bottleCart , bottle];
        setBottleCart(newCart);
        addCart(bottle.id)
    }

    const removeCart = id => {
        // visual cart remove
         const remove = bottleCart.filter(idx => idx.id !== id);
        setBottleCart(remove)
        // remove form localStorage
        removeCartItem(id)
        console.log(id);
    }

  return (
    <div>
        <h2>Bottles Available: {bottles.length}</h2>
        <Cart removeCart={removeCart} cart={bottleCart}></Cart>
        <div className="bottle">
        {
            bottles.map(item => <Item key={item.id} item={item} handleCart={handleCart} ></Item>)
        }
        </div>
    </div>
  )
}

export default Bottles