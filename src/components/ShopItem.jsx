import PropTypes from "prop-types";

function ShopItem({ item, cart, setCart, addToCart, removeFromCart }) {
  function onChange(e) {
    const quantity = parseInt(e.target.value, 10);
    if (quantity > 0) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.item.id === item.id) {
          return { ...cartItem, quantity: quantity };
        }
        return cartItem;
      });

      setCart(updatedCart);
    } else {
      setCart(cart.filter((cartItem) => cartItem.item.id !== item.id));
    }
  }

  return (
    <div id={item.id} className="item">
      <img src={item.image} alt="" />
      <span>{item.title}</span>
      <span>{item.price}</span>
      {cart.some((shopItem) => shopItem.item.id === item.id) ? (
        <div id={item.id}>
          <button
            onClick={() => {
              removeFromCart(item);
            }}
          >
            -
          </button>
          <input
            type="number"
            step="1"
            min="0"
            value={
              cart.find((cartItem) => cartItem.item.id === item.id).quantity ||
              0
            }
            data-testid="ItemCountInput"
            onChange={onChange}
          />
          <button
            onClick={() => {
              addToCart(item);
            }}
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            addToCart(item);
          }}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
}

ShopItem.propTypes = {
  item: PropTypes.object,
  cart: PropTypes.array,
  setCart: PropTypes.func,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  id: PropTypes.string,
};

export default ShopItem;
