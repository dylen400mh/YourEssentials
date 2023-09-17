/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { MemoryRouter } from "react-router-dom";

describe("Navbar component", () => {
  it("Renders a navbar with home and shop links", () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
