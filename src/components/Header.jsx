import Navbar from "./Navbar";
import CartButton from "./CartButton";
import PropTypes from "prop-types";

function Header({ cart }) {
  return (
    <header className="bg-indigo-700 text-white py-4 fixed top-0 w-full">
      <div className="flex items-center justify-between mx-3">
        <h1 className="text-2xl font-bold">YourEssentials</h1>
        <div className="flex items-center space-x-4 gap-2">
          <Navbar data-testid="Navbar" />
          <CartButton cart={cart} />
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  cart: PropTypes.array,
};

export default Header;
