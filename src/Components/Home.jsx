import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa';
import { ADD_TO_CART } from '../Services/Constants';

function Home  (props) {
    console.warn("home", props.data)
  return (
    <div>
        <div className='add-to-cart'>
            <span className='num'>{props.data.length}</span>
            < FaCartArrowDown/>
        </div>
        <h1>Home</h1>
        <div className='cart-wrapper'>
            <div className='img-wrapper item'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-6Ipo3QVEQ9mJbPd3FOoNSMu5lYAnZwcu1A&usqp=CAU'/>
            </div>

            <div className='text-wrapper item'>
                <span>I Phone</span>
                <span>Price: $1000.00</span>
               
            </div>

            <div className='btn-wrapper item'>
               <button onClick={()=>props.addToCartHandler({price:1000,name:'i phone 11'})}>Add To Cart</button>
               <button onClick={()=>props.removeToCartHandler()} className='rem'>Remove To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Home