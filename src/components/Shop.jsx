import Header from "./Header";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ShopItem from "./ShopItem";

function Shop({ cart, setCart, addToCart, removeFromCart }) {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // fetch data from fakestore api
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/", { mode: "cors" })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server error");
        }

        return res.json();
      })
      .then((json) => setProducts(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header cart={cart}></Header>
      <div className="container mx-12 py-4 mt-16">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">Shop</h1>
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-600">
            An error has occured: {error}
          </p>
        ) : (
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ShopItem
                key={product.id}
                item={product}
                cart={cart}
                setCart={setCart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

Shop.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
};

export default Shop;
