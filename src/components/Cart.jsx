import CartItem from "./CartItem";
import Header from "./Header";
import { Link } from "react-router-dom";

function Cart({ cart, setCart, addToCart, removeFromCart }) {
  const total = cart.reduce((total, item) => total + item.item.price, 0);
  const cartSize = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Header cart={cart} />
      <h1>Your Cart</h1>
      <span>{cartSize} items</span>
      {cart.map((item) => {
        console.log(item.item.id);

        return (
          <CartItem
            key={item.item.id}
            item={item.item}
            quantity={item.quantity}
            cart={cart}
            setCart={setCart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        );
      })}
      <h2>Total: ${total}</h2>
      <Link to="/checkout">Checkout</Link>
    </div>
  );
}

export default Cart;
