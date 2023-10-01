import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav data-testid="Navbar">
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
    </nav>
  );
}

export default Navbar;
