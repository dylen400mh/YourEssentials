import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CartButton({ cart }) {
  return (
    <div>
      <Link to="/cart">
        <ShoppingBagIcon data-testid="ShoppingBagIcon" />
        {cart.length > 0 && <div data-testid="ItemCount">{cart.length}</div>}
      </Link>
    </div>
  );
}

CartButton.propTypes = {
  cart: PropTypes.array,
};

export default CartButton;
