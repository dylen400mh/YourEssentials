import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "./App";

function CartButton() {
  const {cart} = useContext(ShopContext);

  return (
    <div>
      <Link to="cart">
        <ShoppingBagIcon data-testid="ShoppingBagIcon" />
        {cart.length > 0 && <div data-testid="ItemCount">{cart.length}</div>}
      </Link>
    </div>
  );
}

export default CartButton;
