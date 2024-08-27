import React,{useState} from 'react'

import waffle from "../../assets/images/image-waffle-thumbnail.jpg"
import Confirmed from "../../assets/images/icon-order-confirmed.svg"
const Popup = ({isOpen, setIsOpen,cart}) => {
 
    const handleClose=()=>{
      setIsOpen(false)
    }

    const handleRefresh = () => {
      setIsOpen(false)
      window.location.reload(); // This refreshes the entire page
    };
  return (
    <div onClick={handleClose} className=''>
    {isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[500px]">
          <img src={Confirmed} alt={"default"}/>
          <h2 className="text-[44px] font-bold">Order Confirmed</h2>
          <p className="mb-6">We hope you enjoy your food!</p>


          
          {cart.map((ct,index)=>(

              <div key={index} className='border flex items-center gap-5 p-3 bg-[#fef3c7]/30'>
              <div>
                <img src={ct.image.thumbnail} alt="carditem" className='w-12 h-12'/>
              </div>
              <div className='flex-1 flex-col gap-3'>
                  <p className='font-medium'>{ct.name}</p>
                  <div className='flex items-center gap-2 mt-2'>
                      <p className='text-orange-700 font-medium'>{ct?.quantity}x</p>
                      <p>@ ${ct.price}</p>
                  </div>
              </div>
              <div>
                <p className='font-medium'>${ct.price *ct?.quantity}</p>
              </div>
            </div>

            ))}
          <button className=' w-full border-2 border-orange-700 flex py-2 rounded-full mt-5 font-medium justify-center text-white hover:text-black bg-orange-700 hover:bg-white transition duration-300' onClick={handleRefresh}>Start New Order</button>
          
         
            
          </div>

        </div>
         
    )}
  </div>
  )
}


export default Popup