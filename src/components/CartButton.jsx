import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CartButton({ cart }) {
  const cartSize = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Link to="/cart">
        <ShoppingBagIcon data-testid="ShoppingBagIcon" />
        {cartSize > 0 && <div data-testid="ItemCount">{cartSize}</div>}
      </Link>
    </div>
  );
}

CartButton.propTypes = {
  cart: PropTypes.array,
};

export default CartButton;
