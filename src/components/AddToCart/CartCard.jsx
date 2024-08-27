import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
const CartCard = ({ct,removeItemFromCart}) => {
  return (
    
     <div className='flex justify-between items-center border-b border-zinc-300 py-3'>
      <div className='flex-1 flex-col gap-3'>
          <p className='font-medium'>{ct.name}</p>
          <div className='flex items-center gap-2 mt-2'>
              <p className='text-orange-700 font-medium'>{ct?.quantity}x</p>
              <p>@ ${ct.price}</p>
              <p className='font-medium'>${ct.price *ct?.quantity}</p>
          </div>
      </div> 
      <div>
          <RxCrossCircled onClick={()=>removeItemFromCart(ct.name)} size={22}/>
      </div> 
    </div>


   
  )
}

export default CartCard