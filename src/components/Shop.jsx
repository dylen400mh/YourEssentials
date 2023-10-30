import Header from "./Header";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ShopItem from "./ShopItem";

function Shop({ cart, addToCart, removeFromCart }) {
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
    <div>
      <Header cart={cart}></Header>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error has occured: {error}</p>
      ) : (
        <div>
          {products.map((product) => (
            <ShopItem
              key={product.id}
              item={product}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}

Shop.propTypes = {
  cart: PropTypes.array,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
};

export default Shop;
