import React from 'react'
import CartCard from "./CartCard"

import defaultImage from "../../assets/images/image-baklava-tablet.jpg"

const Cart = ({setIsOpen,cart,removeItemFromCart}) => {

    let cnt=0;

    for(let i=0; i<cart.length; i++) {
      cnt+= cart[i].price* cart[i]?.quantity;
    }

    let total= cnt;

  
  return (
    <div className='bg-white py-2'>


      {cart.length>0?
      <>
       <div>
        {cart.map((ct,index)=>(

          <CartCard key={index} removeItemFromCart={removeItemFromCart}  ct={ct} />

        ))}
      </div>

      


      <div className='flex flex-col gap-5 mt-8'>
        <div className='flex items-center justify-between'>
          <p className='text-[22px] font-semibold'>Total</p>
          <p className='text-[22px] font-semibold'>${total}</p>
        </div>
        <div className='w-full'>
          <button onClick={()=>setIsOpen(true)} className='bg-orange-700 border-2 border-orange-700 w-full py-2 text-[18px] font-medium text-white rounded-full transition-all duration-300 hover:text-black hover:bg-white '>
            Confirm Order
            </button>
        </div>
      </div>
      </>

      :
      <div>
          You don't have any item in the cart
      </div>
    
    }
      
     
    </div>
  )
}

export default Cart