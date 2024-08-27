import React,{useState} from 'react'
import Product from '../components/Product/Product'
import Cart from '../components/AddToCart/Cart'
import Popups from '../components/Popup/Popup'
import { product_data } from '../data/data'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [cart,setCart]=useState([]);

    const addToCart = (name) => {
        const getItem = product_data.find(product => product.name === name);
      
        if (!getItem) {
          alert("Product not found");
          return;
        }
      
        const existingItem = cart.find(cartItem => cartItem.name === getItem.name);
      
        if (existingItem) {
          if (existingItem?.quantity + 1 > getItem?.quantity) {
            alert("Please choose another product");
            return;
          }
          setCart(
            cart.map(cartItem =>
              cartItem.name === name
                ? { ...cartItem, quantity: cartItem?.quantity + 1 }
                : cartItem
            )
          );
        } else {
          setCart([...cart, { ...getItem, quantity: 1 }]);
        }
      
        alert("Product added successfully");
      };
      
    
    
      // Remove accourance from cart
    
      const removeItemFromCart = (name) => {
        console.log(name)
        
        const item= cart.find(ct=> ct.name === name);

        if (item?.quantity === 1) {
          handleRemoveItem(name)
        }
    
        else {
          setCart(
            cart.map(cartItem =>
              cartItem.name === name
                ? { ...cartItem, quantity: cartItem?.quantity - 1 }
                : cartItem
            )
          );
        }
    
    
        alert("Product removed successfully")
      }
    
      const handleRemoveItem = (itemId) => {
        console.log(itemId);
        setCart((prevCart) => prevCart.filter((cartItem) => cartItem.name !== itemId));
      };
    
    

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 h-screen p-4">
            <div className="sec-one md:col-span-2 lg:col-span-4 sm:overflow-y-auto ">
                <h1 className='text-[34px] font-bold text-zinc-700'>Desserts</h1>
                <div className="h-full ">
                    <Product addToCart={addToCart} cart={cart} removeItemFromCart={removeItemFromCart}/>
                </div>
            </div>

            <div className="sec-one col-span-1 lg:col-span-2 sm:overflow-y-auto">
                <div className=" bg-white py-2 sm:px-5 rounded-md mt-5">
                    <h1 className='text-[18px] font-bold text-orange-700'>Your Cart {`( ${cart.length} )`}</h1>
                    <Cart removeItemFromCart={removeItemFromCart} isOpen={isOpen} setIsOpen={setIsOpen} cart={cart}/>
                </div>
            </div>

            {isOpen && <Popups isOpen={isOpen} setIsOpen={setIsOpen} cart={cart}/>}
        </div>
        
        
  )
}

export default Home
