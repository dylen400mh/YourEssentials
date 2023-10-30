import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Shop";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import Home from "./Home";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    
    const oldCount = cart.some((cartItem) => cartItem.id === item.id) ? cart[item].quantity : 0;
    const newEntry = { item: item, quantity: oldCount + 1 };

    setCart([
      ...cart.filter((cartItem) => cartItem.item.id !== item.id),
      newEntry,
    ]);
  };

  const removeFromCart = (item) => {
    const oldCount = cart[item].quantity;
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
      element: <Cart />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
