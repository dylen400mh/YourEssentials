/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import ShopItem from "../components/ShopItem";

describe("ShopItem component", () => {
  const mockItem = {
    id: "1",
  };

  const mockCart = [
    {
      item: mockItem,
      quantity: 1,
    },
    {
      item: {
        id: "2",
      },
      quantity: 2,
    },
  ];

  const mockSetCart = vi.fn();
  const mockAddToCart = vi.fn();
  const mockRemoveFromCart = vi.fn();

  it('Renders an "Add to Cart" button when item is not in the cart', () => {
    render(
      <ShopItem
        item={mockItem}
        cart={[]}
        setCart={mockSetCart}
        addToCart={mockAddToCart}
        removeFromCart={mockRemoveFromCart}
      />
    );

    const addToCartButton = screen.getByText("Add To Cart");
    expect(addToCartButton).toBeInTheDocument();
  });

  it("Renders +/- buttons and input field when item is in the cart", () => {
    render(
      <ShopItem
        item={mockItem}
        cart={mockCart}
        setCart={mockSetCart}
        addToCart={mockAddToCart}
        removeFromCart={mockRemoveFromCart}
      />
    );

    const minusButton = screen.getByText("-");
    const plusButton = screen.getByText("+");
    const quantityInput = screen.getByTestId("ItemCountInput");

    expect(minusButton).toBeInTheDocument();
    expect(plusButton).toBeInTheDocument();
    expect(quantityInput).toBeInTheDocument();
  });

  it('Calls addToCart function when "Add to Cart" button is clicked', () => {
    render(
      <ShopItem
        item={mockItem}
        cart={[]}
        setCart={mockSetCart}
        addToCart={mockAddToCart}
        removeFromCart={mockRemoveFromCart}
      />
    );

    const addToCartButton = screen.getByText("Add To Cart");
    fireEvent.click(addToCartButton);

    expect(mockAddToCart).toHaveBeenCalledWith(mockItem);
  });

  it('Calls removeFromCart function when "-" button is clicked and item count is 1', () => {
    render(
      <ShopItem
        item={mockItem}
        cart={mockCart}
        setCart={mockSetCart}
        addToCart={mockAddToCart}
        removeFromCart={mockRemoveFromCart}
      />
    );

    const minusButton = screen.getByText("-");
    fireEvent.click(minusButton);

    expect(mockRemoveFromCart).toHaveBeenCalledWith(mockItem);
  });

  it("Calls setCart function with updated quantity when input field is changed", () => {
    render(
      <ShopItem
        item={mockItem}
        cart={mockCart}
        setCart={mockSetCart}
        addToCart={mockAddToCart}
        removeFromCart={mockRemoveFromCart}
      />
    );

    const quantityInput = screen.getByTestId("ItemCountInput");
    fireEvent.change(quantityInput, { target: { value: "3" } });

    expect(mockSetCart).toHaveBeenCalledWith([
      {
        item: mockItem,
        quantity: 3,
      },
      {
        item: {
          id: "2",
        },
        quantity: 2,
      },
    ]);
  });
});
