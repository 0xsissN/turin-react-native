# Event Ticket Sales App

## Overview

This project is a mobile application built with **React Native**, **TypeScript**, **NativeWind** for styling, and **Expo** for development and deployment. The app is designed to facilitate the sale of event tickets, providing users with an intuitive interface to browse, purchase, and manage tickets. The application incorporates several design patterns such as **Observer**, **Factory**, and **Singleton**, and includes a **CRUD** system for managing events and tickets. It integrates with **MockAPI** as the backend for data handling.

---

## Features

- **Event Listing**: Browse upcoming events with details such as **name**, **description**, **cost**, **date**, and **image**.
- **Ticket Purchase**: Users can purchase tickets for events directly through the app.
- **CRUD Operations**: Create, Read, Update, and Delete events (admin functionality).
- **API Integration**: Seamless integration with **MockAPI** for data fetching and synchronization.
- **Design Patterns**:
  - **Observer**: Used to notify the admin panel in real-time when a user purchases a ticket. The admin panel displays the number of tickets sold and their types (e.g., event, ticket type).
  - **Factory**: For creating different types of tickets (e.g., VIP, standard).
  - **Singleton**: Ensures a single instance of critical services like API handlers or state management.
- **Responsive Design**: Built with **NativeWind** for a consistent and responsive UI across devices.
- **Expo Router**: Used for navigation and routing within the app.

---

## Technologies Used

- **React Native**: Framework for building cross-platform mobile applications.
- **TypeScript**: Adds static typing to JavaScript for better code quality and maintainability.
- **NativeWind**: Utility-first CSS framework for styling React Native components.
- **Expo**: Development platform for building and deploying React Native apps.
- **Expo Router**: For handling navigation and routing within the app.
- **MockAPI**: Backend service for mocking API endpoints and handling CRUD operations.
- **Axios**: For making HTTP requests to the MockAPI backend.
- **State Management**: Context API or Redux (optional, depending on complexity).
- **Design Patterns**: Observer, Factory, and Singleton patterns implemented for scalable and maintainable code.

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/0xsissN/turin-react-native.git
   cd turin-react-native

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the app

   ```bash
    npx expo start
   ```

