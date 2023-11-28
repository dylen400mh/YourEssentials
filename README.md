# YourEssentials - Ecommerce Shopping Cart

YourEssentials is an Ecommerce website created with React that mimics the experience of online shopping. Users have the ability to add items to their cart, modify their items, and navigate to the checkout page when ready.  

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Challenges and Lessons](#challenges-and-lessons)
- [Acknowledgments](#acknowledgments)

## Demo

https://github.com/dylen400mh/YourEssentials/assets/97004369/784ff76e-c009-4607-93dd-de9161b498a7

[LIVE DEMO](https://dylen400mh-youressentials.netlify.app/)

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

## Installation

Step-by-step instructions on how to install and set up the project locally.

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/yourproject.git
   ```
   
2. Change to the project directory

   ```bash
   cd yourproject
   ```
   
3. Install dependencies

   ```
   npm install
   ```

## Challenges and Lessons
Throughout the development process, I was forced to adapt my approach to implementing certain features. Here are some issues I faced and what I learned from each of these encounters:

  - I was unable to test my React components that included React Router components because I never created a BrowserRouter instance in my tests. I learned that create a BrowserRouter component was necessary for the execution of each of my tests.
  - My routes and components were initially created in a way where the cart's current state couldn't be passed between components easilly. I discovered this was the result of me creating a separate Router component containing the router information. I could not use this component properly inside the App component to share state, so I moved my router configuration to the App component instead. This change allowed me to share state much easier between child components.
  - Because I wrote some of my initial unit tests after I created the components, some tests were hard to pass. To alleviate this issue, I wrote the tests beforehand and created my components to pass their respective tests. This made Test Driven Development much more intuitive for me and increased my productivity immensely.

## Acknowledgments

This project was completed by following [The Odin Project](https://www.theodinproject.com/)'s Web Development curriculum.
