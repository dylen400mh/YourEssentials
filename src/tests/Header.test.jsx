/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";

describe("Header component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header cart={[]} />
      </BrowserRouter>
    );
  });

  it("Renders h1 containing the site title", () => {
    expect(screen.getByRole("heading").textContent).toBe("Shopping Cart");
  });

  it("Renders Navbar component", () => {
    expect(screen.getByTestId("Navbar")).toBeInTheDocument();
  });
});
