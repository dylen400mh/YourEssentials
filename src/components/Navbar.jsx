import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar(props) {
  return (
    <nav data-testid={props["data-testid"]}>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
    </nav>
  );
}

Navbar.propTypes = {
  "data-testid": PropTypes.string,
};

export default Navbar;
