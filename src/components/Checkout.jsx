import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div className="container mx-12 py-8">
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">Checkout</h1>
      <p className="text-gray-600">
        This is where the checkout process would take place, but there is no
        need for such on this application!!!
      </p>
      <Link
        to="/"
        className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none inline-block"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default Checkout;
