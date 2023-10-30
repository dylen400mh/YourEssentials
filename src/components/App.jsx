import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Shop";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import Home from "./Home";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log("Added");
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem !== item));
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
