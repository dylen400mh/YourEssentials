import Navbar from "./Navbar";
import CartButton from "./CartButton";

function Header() {

  return (
    <header>
      <h1>Shopping Cart</h1>
      <Navbar data-testid="Navbar" />
      <CartButton />
    </header>
  );
}

export default Header;
