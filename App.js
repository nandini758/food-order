import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import ShoppingCarts from "./components/AddToCart/ShoppingCarts";
import axios from "axios";


function App() {

  const [apiData, setApiData] = useState([]);
  const [cart, setCart] = useState([]);

  const host = "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"


  // Api response
  const getdata = async () => {
    try {
      const response = await axios.get(host);
      setApiData(response.data);
    } catch (err) {
      console.log("Error: " + err);
    }
  }



  // Add Prdduct in the Shopping Cart

  const addToCart = (item) => {

    const getItemQuantityFromApiRespose = apiData.find(product => product.id === item.id);

    const existingItem = cart.find(cartItem => cartItem.id === getItemQuantityFromApiRespose.id);

    if (existingItem) {
      if (existingItem.quantity + 1 > getItemQuantityFromApiRespose.quantity) {
        alert("Please choose another product");
        return;
      }
      setCart(
        cart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }

    alert("Product added successfully")

  };


  // Remove accourance from cart

  const removeItemFromCart = (item) => {
    console.log(item)

    if (item.quantity === 1) {
      handleRemoveItem(item.id)
    }

    else {
      setCart(
        cart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }


    alert("Product removed successfully")
  }


  // Remove Product from Shopping cart

  const handleRemoveItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== itemId));
  };



  // Get Initial Data from API  
  useEffect(() => {
    getdata()
  }, []);

  return (
    <div className="md:h-screen md:overflow-hidden" >
      <Header cart={cart} setCart={setCart} />

      <div className="max-w-[1280px] mx-auto ">

        <Routes>

          <Route path="/" element={<Home apiData={apiData} cart={cart} setCart={setCart} onAddToCart={addToCart} />} />

          <Route path="/addtocart" element={<ShoppingCarts cart={cart} onAddToCart={addToCart} removeItemFromCart={removeItemFromCart} handleRemoveItem={handleRemoveItem} />} />
        </Routes>

      </div>

    </div>
  );
}

export default App;
