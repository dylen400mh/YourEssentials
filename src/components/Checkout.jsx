import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div>
      <h1>Checkout</h1>
      <p>
        This is where the checkout process would take place, but there is no
        need for such on this application!!!
      </p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Checkout;
