/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import CartButton from "../components/CartButton";
import { BrowserRouter } from "react-router-dom";

describe("CartButton component", () => {
  it("Renders a Link component and shopping cart icon when the cart is empty", () => {
    const cart = [];

    render(
      <BrowserRouter>
        <CartButton cart={cart} />
      </BrowserRouter>
    );

    const linkElement = screen.getByRole("link");
    const iconElement = screen.getByTestId("ShoppingBagIcon");
    const itemCount = screen.queryByTestId("ItemCount");

    expect(linkElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(itemCount).not.toBeInTheDocument();
  });

  it("Renders item count div when the cart has items in it", () => {
    const cart = [{}, {}];
    render(
      <BrowserRouter>
        <CartButton cart={cart} />
      </BrowserRouter>
    );

    const itemCount = screen.queryByTestId("ItemCount");

    expect(itemCount).toBeInTheDocument();
    expect(itemCount).toHaveTextContent(cart.length);
  });
});
