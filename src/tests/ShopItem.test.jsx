/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import ShopItem from "../components/ShopItem";
import { BrowserRouter } from "react-router-dom";
import { ShopContext } from "../components/App";

describe("ShopItem component", async () => {

    let product = {};

    beforeEach(() => {
        render(
            <BrowserRouter>
            <ShopContext.Provider>
              <ShopItem item={{product}}/>
            </ShopContext.Provider>
          </BrowserRouter>
        );
      });

    it("Adds item to cart when 'add to cart' is clicked.", () => {

    })

    it("Changes item count when input field is modified.", () => {

    })

    it("Changes item count when +/- buttons are clicked.", () => {

    })

    it("Remove item from cart if - button is clicked and the item count is 1.", () => {

    })

    it("Replaces 'add to cart' button with +/- buttons and input field when an item is added.", () => {

    })
});