import { useState, createContext } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

export const ShopContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
})

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item])
    console.log("Added")
  }

  const removeFromCart = (item) => {
    setCart(cart.filter(cartItem => cartItem !== item));
  }

  return (
    <ShopContext.Provider value={{cart, addToCart, removeFromCart}}>
      <Header />
      <h1>Welcome to YourEssentials</h1>
      <p>
        Your One-Stop Shop for Quality and Convenience! Discover a world of
        endless possibilities, browse our curated selection of products, and
        indulge in a seamless shopping experience. From fashion to electronics,
        home decor to personal care, we&apos;ve got it all. Start exploring now,
        and let us redefine the way you shop!
      </p>
      <Link to="/shop">Shop Now!</Link>
    </ShopContext.Provider>
  );
}

export default App;
