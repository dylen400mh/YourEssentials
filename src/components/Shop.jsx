import Header from "./Header";
import {useContext} from "react";
import { ShopContext } from "./App";

function Shop() {
    const {cart} = useContext(ShopContext);

    return <div>
        <Header cart={cart}></Header>
    </div>
}

export default Shop;