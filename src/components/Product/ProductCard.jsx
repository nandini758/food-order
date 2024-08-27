import React, {useState} from 'react'
import { FiMinusCircle,FiPlusCircle } from "react-icons/fi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
const ProductCard = ({product,addToCart,removeItemFromCart,ctQ}) => {
  const [isOpen,setIsOpen] = useState(false);

   console.log(ctQ)

  return (
      <div>
        <div className='relative cursor-pointer rounded-md transition-all duration-100 border-2 border-transparent hover:border-2 hover:border-red-300'>
          <img  src={product.image.thumbnail} alt={product.name} className='w-full rounded-md overflow-hidden aspect-square ' />
          <div>
            {
              ctQ>=1?"":
              <div 
                onClick={()=>{
                  addToCart(product.name);
                  setIsOpen(true);
                }
              }
                className='cursor-pointer absolute left-1/2 -bottom-5 px-4 py-2 -translate-x-1/2  bg-white flex justify-center items-center gap-2 shadow-md whitespace-nowrap font-medium rounded-full border-2 border-orange-300'>
              <p className='text-orange-700'><MdOutlineAddShoppingCart  size={22} /></p>
              <p className='text-[18px] text-black'>
              Add to cart

              </p>
            </div>
            }
           

            {ctQ>=1?
            <div 
            
            className='absolute left-1/2 -bottom-5 px-4 py-2 -translate-x-1/2  bg-orange-700 flex justify-center items-center gap-8 shadow-md whitespace-nowrap font-medium rounded-full border-2 border-orange-300'>
              <p><FiMinusCircle onClick={()=>removeItemFromCart(product.name)} size={22} color='white'/></p>
              <p className='text-[20px] text-white'>{ctQ}</p>
              <p><FiPlusCircle onClick={()=>addToCart(product.name)}  size={22} color='white'/></p>
            </div>:""}
          </div>



        </div>
        <div className='p-2 mt-3'>
          <p className='text-[14px] font-medium text-zinc-400'>{product.category}</p>
          <p className='text-[16px] font-medium'>{product.name}</p>
          <p className='text-[18px] font-medium text-red-600'>$. {product.price}</p>
        </div>
      </div>
  )
}

export default ProductCard
