# Frontend - Restaurant App

The frontend of the restaurant app is built using React and provides the user interface for interacting with the app. It includes components for navigation, menus, and interactions with the backend API to fetch restaurant data.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Tools and Technologies](#tools-and-technologies)
3. [Concepts](#concepts)
4. [Running the Frontend Locally](#running-the-frontend-locally)
5. [Environment Variables](#environment-variables)
6. [Next Steps](#next-steps)

---

## Project Structure

The frontend is organized into various components and directories. Here’s the general structure of the frontend project:


frontend/ ├── public/ # Static assets like index.html and images ├── src/ │ ├── components/ # Reusable components for UI (Navbar, Menu, etc.) │ ├── pages/ # Pages for different routes (Home, About, Menu, etc.) │ ├── services/ # API calls and logic to interact with the backend │ ├── App.js # Main component where routing is defined │ ├── index.js # Main entry point for React │ └── App.css # Global styling ├── package.json # Project metadata and dependencies └── .env # Environment variables (optional)


### Main Components:

1. **Navbar**: The navigation bar that allows users to move between different pages like Home, Menu, Contact, etc.
2. **Menu Page**: Displays the restaurant's menu fetched from the backend API.
3. **Home Page**: The landing page of the app.
4. **Error Page**: A fallback page that shows if an unknown route is accessed.
5. **API Service**: A service that handles API calls to the backend.

---

## Tools and Technologies

The frontend leverages the following tools and technologies:

- **React**: A JavaScript library for building user interfaces.
- **React Router**: A standard routing library for React, allowing the app to have multiple pages.
- **Axios**: A promise-based HTTP client used for making API requests to the backend.
- **CSS/Styled Components**: For styling the components and pages.
- **Docker**: Used to containerize the frontend for seamless development and production deployments.
- **NGINX**: Serves as the reverse proxy for the frontend and backend services.

---

## Concepts

### 1. **Component-Based Architecture**: 
   The application follows a component-based structure, where different sections of the UI are broken down into reusable components such as `Navbar`, `MenuItem`, and `Footer`.

### 2. **React Router**: 
   Routing is handled using React Router. The app is configured to have multiple routes including `/`, `/menu`, and others to navigate different parts of the app. This allows users to have a single-page experience while browsing multiple views.

   
   <BrowserRouter>
     <Navbar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/menu" element={<Menu />} />
       <Route path="*" element={<ErrorPage />} />
     </Routes>
   </BrowserRouter>

# 3. State Management:
Components manage their internal state using React’s useState and useEffect hooks. For example, when fetching menu data from the backend, the state is updated based on the API response.

useEffect(() => {
  axios.get("/api/menu")
    .then(response => setMenuData(response.data))
    .catch(error => console.error("Error fetching menu:", error));
}, []);


# 4. API Integration:
The app communicates with the backend API to fetch data for different pages, such as the restaurant's menu, using Axios. This data is then displayed to users in the UI.

 # 5. Styling:
The app uses a mix of global CSS styles and component-level styles. Custom CSS is written for responsiveness and aesthetic appeal, ensuring a clean and user-friendly design.

Running the Frontend Locally
To run the frontend on your local machine, follow the steps below:

Prerequisites:
Ensure you have the following installed:

Node.js: Download Node.js
Docker (if running the app using Docker)
1. Clone the repository:

git clone <repository-url>
cd restaurant-app/frontend

2. Install the dependencies:

npm install

3. Running the Frontend:
Option 1: Using npm
To start the development server:


npm start
This will run the app on http://localhost:3000. Any changes made will hot reload the browser.

Option 2: Using Docker
To run the frontend in a Docker container:


docker build -t restaurant-app-frontend .
docker run -p 3000:3000 restaurant-app-frontend

4. Building for Production:
To create an optimized production build, run the following 

command:
npm run build

This will create a build folder with all static files ready to be served.

Environment Variables
Ensure that you configure the necessary environment variables for your frontend:

REACT_APP_API_URL: The URL of your backend API. This is used by the frontend to fetch data.
In your .env file:


REACT_APP_API_URL=http://localhost:5000
To load these variables, restart the application.