# React User Dashboard

A React user dashboard developed as part of a frontend internship training task.

The application demonstrates simulated user authentication, protected routes, global authentication state, API data fetching, reusable components, and navigation between dashboard and profile pages.

## Features

- Log in using a username
- Preserve the logged-in user using `localStorage`
- Protect dashboard and profile routes
- Redirect unauthenticated users to the login page
- Display users fetched from an external API
- Handle loading and error states
- View the logged-in user’s profile
- Log out and clear the stored authentication state
- Navigate between dashboard and profile pages
- Reuse common UI components

## Concepts Practiced

- React functional components
- React Context API
- Custom hooks
- `useState`
- `useEffect`
- `useRef`
- React Router
- Nested and protected routes
- `Outlet` and `Navigate`
- Programmatic navigation
- API requests with Axios
- Loading and error state handling
- `localStorage`
- Component composition
- CSS Modules
- Separation of components, containers, routes, and services

## Technologies

- React
- JavaScript
- Vite
- React Router
- Axios
- Context API
- Font Awesome
- CSS Modules
- JSONPlaceholder API

## Authentication Note

Authentication in this project is simulated for frontend training purposes.

The application stores the entered username in `localStorage` and uses it to control access to protected routes. It does not connect to a backend authentication service and should not be considered production-ready authentication.

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/Duha-Maali/react-user-dashboard.git
   ```

2. Open the project directory:

   ```bash
   cd react-user-dashboard
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal.

## Project Context

This repository was created as a frontend internship training task to practice React Router, protected routes, Context API, custom hooks, API integration, reusable components, and authentication-state handling.
