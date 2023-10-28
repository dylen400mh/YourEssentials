import Header from "./Header";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "./App";

function Shop() {
  const { cart } = useContext(ShopContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = fetch("https://fakestoreapi.com/products/")
        .then((res) => res.json())
        .then((json) => console.log(json));
      setProducts(response);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header cart={cart}></Header>
    </div>
  );
}

export default Shop;
