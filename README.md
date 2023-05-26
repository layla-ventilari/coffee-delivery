# ☕ Coffee Delivery

Welcome to the Coffee Delivery project! This project aims to create a coffee delivery page where users can browse and purchase various types of coffee. The goal is to provide an easy and intuitive shopping experience for coffee lovers.

## 🚀 Features

The Coffee Delivery project offers the following features:

- **Product Listing**: Users can view the list of available coffees for purchase. Each coffee is displayed with its name, description, and price.

- **Add and Remove Items from Cart**: Users can add coffees to the shopping cart. They also have the option to remove items from the cart.

- **Cart Item Count**: The header displays the total number of items in the cart so that users can easily keep track of the selected quantity of coffees.

- **Address Form**: Before completing the purchase, users are prompted to fill out a form with their address details for delivery.

- **Total Purchase Value**: The total value of the purchase is calculated based on the quantity of each item in the cart, multiplied by the individual price of each coffee.

## 🛠️ Technologies Used

The Coffee Delivery project was developed using the following technologies:

- ReactJS: JavaScript library for building the user interface.
- Context API: Used for data sharing between components and managing the global state of the shopping cart.
- LocalStorage: Browser-based storage to persist cart items between sessions.
- CSS: Styling of the project using Styled Components.

## 📁 Directory Structure

The project directory structure is organized as follows:

```
coffee-delivery/
  |- public/
  |- src/
      |- components/
      |- data/
      |- pages/
      |- App.js
      |- index.js
  |- README.md
```

- The `public` folder contains the main HTML file and other static assets.
- The `src` folder contains the project's source code.
  - The `components` folder contains reusable components used in the pages.
  - The `data` folder contains the data of the available coffees for purchase.
  - The `pages` folder contains the main project pages.
  - The `App.js` file is the main component that defines the overall structure of the application.
  - The `index.js` file is responsible for rendering the application on the HTML page.
- The `README.md` file contains information about the project.

## ⚙️ How to Run the Project

To run the project on your local machine, follow the steps below:

1. Make sure you have Node.js installed on your machine.
2. Clone this repository to your desired directory.
3. Open the terminal and navigate to the project's root directory.
4. Run the `npm install` command to install the project dependencies.
5. Once the installation is complete, run the `npm start` command to start the development server.
6. Open your browser and access `http://localhost:3000` to view the project.

Feel free to modify the README according to your project's specific needs.