import CartItem from "./CartItem";
import Header from "./Header";
import { Link } from "react-router-dom";

function Cart({ cart, setCart, addToCart, removeFromCart }) {
  const total = cart.reduce(
    (total, item) => total + item.item.price * item.quantity,
    0
  );
  const cartSize = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header cart={cart} />
      <div className="container mx-12 py-4 mt-16">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4 ml-4">
          Your Cart
        </h1>
        <span className="text-gray-600">{cartSize} items</span>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cart.map((item) => {
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
        </div>
        <h2 className="text-2xl font-bold mt-4">Total: ${total}</h2>
        <Link
          to="/checkout"
          className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none inline-block"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
