import Header from "./Header";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "./App";

function Shop() {
  const { cart } = useContext(ShopContext);

  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // fetch data from fakestore api
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/", {mode: "cors"})
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
      {loading ? <p>Loading...</p> : error ? <p>An error has occured: {error}</p> : <ShopItems products={products}/>}
    </div>
  );
}

export default Shop;
