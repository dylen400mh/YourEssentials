function CartItem({
  item,
  quantity,
  cart,
  setCart,
  addToCart,
  removeFromCart,
}) {
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
    <div>
      <img src={item.image} alt="" />
      <span>{item.title}</span>
      <span>{item.price}</span>
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
          min="1"
          value={quantity}
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
      <button
        onClick={() => {
          removeFromCart(item);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
