import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Shop";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const newItem = cart.find((cartItem) => cartItem.item.id === item.id);

    const oldCount = newItem ? newItem.quantity : 0;
    const newEntry = { item: item, quantity: oldCount + 1 };

    setCart([
      ...cart.filter((cartItem) => cartItem.item.id !== item.id),
      newEntry,
    ]);
  };

  const removeFromCart = (item) => {
    const newItem = cart.find((cartItem) => cartItem.item.id === item.id);

    const oldCount = newItem ? newItem.quantity : 0;
    const newEntry = { item: item, quantity: oldCount - 1 };

    newEntry.quantity
      ? setCart([
          ...cart.filter((cartItem) => cartItem.item.id !== item.id),
          newEntry,
        ])
      : setCart(cart.filter((cartItem) => cartItem.item.id !== item.id));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home cart={cart} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/shop",
      element: (
        <Shop
          cart={cart}
          setCart={setCart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ),
    },
    {
      path: "/cart",
      element: (
        <Cart
          cart={cart}
          setCart={setCart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ),
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
