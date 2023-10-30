import PropTypes from "prop-types";

function ShopItem({ item, cart, addToCart, removeFromCart }) {
  
  return (
    <div id={item.id} className="item">
      <img src={item.image} alt="" />
      <span>{item.title}</span>
      <span>{item.price}</span>
      {cart.includes(item) ? (
        <div id={item.id}>
          <button onClick={() => {removeFromCart(item)}}>-</button>
          <input
            type="number"
            step="1"
            min="0"
            value={cart.filter((cartItem) => cartItem === item).length}
          />
          <button onClick={() => {addToCart(item)}}>+</button>
        </div>
      ) : (
        <button onClick={() => {addToCart(item)}}>Add To Cart</button>
      )}
    </div>
  );
}

ShopItem.propTypes = {
  item: PropTypes.object,
  cart: PropTypes.array,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  id: PropTypes.string,
};

export default ShopItem;
