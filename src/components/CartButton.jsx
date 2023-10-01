import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CartButton({ cart }) {
  return (
    <div>
      <Link to="cart">
        <ShoppingBagIcon />
        <div>{cart.length}</div>
      </Link>
    </div>
  );
}

CartButton.propTypes = {
  cart: PropTypes.array,
};

export default CartButton;
