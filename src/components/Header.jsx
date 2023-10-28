import Navbar from "./Navbar";
import CartButton from "./CartButton";

function Header() {

  return (
    <header>
      <h1>YourEssentials</h1>
      <Navbar data-testid="Navbar" />
      <CartButton />
    </header>
  );
}

export default Header;
