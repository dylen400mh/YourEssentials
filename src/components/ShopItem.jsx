import PropTypes from "prop-types";

function ShopItem({item}) {
  return <div>
    <img src={item.image} alt="" />
    <span>{item.title}</span>
    <span>{item.price}</span>
    {/* If not in cart already, have add to cart button.
    If in cart, have option to increment, decrement or manually change count (input) */}
  </div>;
}

ShopItem.propTypes = {
    item: PropTypes.object,
}

export default ShopItem;
