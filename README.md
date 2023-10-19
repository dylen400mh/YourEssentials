# Ecommerce Shopping Cart

This project is a react-based ecommerce website currently under development. It will consist of a home page and shopping page, allowing users to explore products and add them to their cart.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Current Stage of Development](#current-stage-of-development)
- [Acknowledgments](#acknowledgments)

## Features

- Users can seamlessly switch between the home page and the shop page using the navigation bar.
- Individual product cards can be clicked, displaying details and the option to add the item to cart.
- Each product card includes options to increment, decrement, or manually input quantities.
- The number of items in the cart is dynamically updated as users add or remove items.
- Products are fetched from the FakeStore API, providing a realistic shopping experience.
- Users can proceed to the cart to checkout and pay for their items (no actual payment logic implemented).

## Technologies Used

  - React
  - React Router
  - React Testing Library
  - HTML/CSS/JavaScript
  - Tailwind
  - Vite
  - Netlify
  - FakeStore API

## Current Stage of Development

The following is an outline of the current state of the project and the future implementations required to complete the application.

### Component Design
The home and shop page components and their respective child components are currently being created and tested using React Testing Library to ensure they function as expected. Some of the main components include:
- App component 
- Router to handle routing
- Navbar to switch between pages
- Home and Shop pages
- Product Cards to display product information
- CartButton to display cart items

### Routing Setup
After the component creation, routes will be implemented with React Router to ensure seamless navigation between pages. 

### Styling
After creating working components and routes, styling with Tailwind will be incorporated to allow for an aesthetically appealing shopping experience. 

## Acknowledgments

This project was completed by following [The Odin Project](https://www.theodinproject.com/)'s Web Development curriculum.
