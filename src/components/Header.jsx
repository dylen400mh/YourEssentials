import Navbar from "./Navbar";
import CartButton from "./CartButton";
import PropTypes from "prop-types";

function Header({ cart }) {
  return (
    <header>
      <h1>Shopping Cart</h1>
      <Navbar data-testid="Navbar" />
      <CartButton cart={cart} />
    </header>
  );
}

Header.propTypes = {
  cart: PropTypes.array,
};

export default Header;
