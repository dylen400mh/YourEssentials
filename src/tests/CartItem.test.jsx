/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import { it, vi } from "vitest";
import CartItem from "../components/CartItem";

describe("CartItem component", () => {
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

  const setup = (quantity) => {
    render(
      <CartItem
        item={mockItem}
        quantity={quantity}
        cart={mockCart}
        setCart={mockSetCart}
        addToCart={mockAddToCart}
        removeFromCart={mockRemoveFromCart}
      />
    );
  };

  it("renders CartItem component with correct item quantity", () => {
    setup(2);
    const quantityInput = screen.getByTestId("ItemCountInput");
    expect(quantityInput).toHaveValue(2);
  });

  it("Calls add/remove functions with clicked item when +/- buttons are clicked", () => {
    setup(2);

    const minusButton = screen.getByText("-");
    const plusButton = screen.getByText("+");

    fireEvent.click(plusButton);
    expect(mockAddToCart).toHaveBeenCalledWith(mockItem);

    fireEvent.click(minusButton);
    expect(mockRemoveFromCart).toHaveBeenCalledWith(mockItem);
  });

  it("Calls setCart function with updated quantity when input field is changed", () => {
    setup(2);

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

  it("Removes a cart item when the 'remove' button is clicked", () => {
    setup(2);

    const removeButton = screen.getByText("Remove");

    fireEvent.click(removeButton);

    expect(mockRemoveFromCart).toHaveBeenCalledWith(mockItem);
  });
});
