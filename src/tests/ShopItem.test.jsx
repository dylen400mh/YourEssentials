/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import ShopItem from "../components/ShopItem";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("ShopItem component", () => {
  it("Adds item to cart when 'add to cart' is clicked.", async () => {
    const user = userEvent.setup();

    const item = {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    };

    const addToCart = vi.fn();

    render(
      <BrowserRouter>
        <ShopItem
          item={item}
          cart={[]}
          addToCart={addToCart}
          removeFromCart={() => {}}
        />
      </BrowserRouter>
    );

    const addToCartButton = screen.getByText("Add To Cart");

    await user.click(addToCartButton);

    expect(addToCart).toHaveBeenCalledWith(item);
  });

  it("Changes item count when input field is modified.", async () => {
    const user = userEvent.setup();

    const item = {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    };

    const cart = [{ item: item, quantity: 1 }];

    const setCart = vi.fn((newCart) => {
      expect(newCart).toEqual([{ item: item, quantity: 2 }]);
    });

    render(
      <BrowserRouter>
        <ShopItem
          item={item}
          cart={cart}
          setCart={setCart}
          addToCart={() => {}}
          removeFromCart={() => {}}
        />
      </BrowserRouter>
    );

    const itemCountInput = screen.getByTestId("ItemCountInput");

    itemCountInput.value = "";
    await user.type(itemCountInput, "2");

    expect(setCart).toHaveBeenCalled();
  });

  it("Changes item count when +/- buttons are clicked.", () => {});

  it("Remove item from cart if - button is clicked and the item count is 1.", () => {});

  it("Replaces 'add to cart' button with +/- buttons and input field when an item is added.", () => {});
});
