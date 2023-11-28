import { Link } from "react-router-dom";
import Header from "./Header";
import PropTypes from "prop-types";

function Home({ cart }) {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <Header cart={cart} />
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">
          Welcome to YourEssentials
        </h1>
        <p className="text-gray-600">
          Your One-Stop Shop for Quality and Convenience! Discover a world of
          endless possibilities, browse our curated selection of products, and
          indulge in a seamless shopping experience. From fashion to
          electronics, home decor to personal care, we&apos;ve got it all. Start
          exploring now, and let us redefine the way you shop!
        </p>
        <Link
          to="/shop"
          className="mt-6 inline-block bg-indigo-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-indigo-600"
        >
          Shop Now!
        </Link>
      </div>
    </div>
  );
}

Home.propTypes = {
  cart: PropTypes.array,
};

export default Home;
