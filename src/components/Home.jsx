import { Link } from "react-router-dom";
import Header from "./Header";
import PropTypes from "prop-types";

function Home({ cart }) {
  return (
    <div>
      <Header cart={cart} />
      <h1>Welcome to YourEssentials</h1>
      <p>
        Your One-Stop Shop for Quality and Convenience! Discover a world of
        endless possibilities, browse our curated selection of products, and
        indulge in a seamless shopping experience. From fashion to electronics,
        home decor to personal care, we&apos;ve got it all. Start exploring now,
        and let us redefine the way you shop!
      </p>
      <Link to="/shop">Shop Now!</Link>
    </div>
  );
}

Home.propTypes = {
  cart: PropTypes.array,
};

export default Home;
