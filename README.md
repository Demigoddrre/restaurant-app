# Restaurant App

This is a full-stack restaurant application built with a frontend in React, a backend using Flask, and NGINX for server configuration. The app is containerized using Docker and can be deployed on Google Cloud. Below are instructions to run the project locally and an overview of the frontend and backend.

## Table of Contents
- [Project Setup](#project-setup)
- [Frontend](#frontend)
- [Backend](#backend)
- [Docker](#docker)
- [Next Steps](#next-steps)

## Project Setup

To run the project locally, follow these steps:

### Prerequisites
Ensure you have the following installed:
- Docker
- Docker Compose
- Git

### Running the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/Demigoddrre/restaurant-app.git
   cd restaurant-app



## Build and run the Docker containers:


docker compose up --build
## This will spin up the following containers:

Frontend (React)
Backend (Flask)
PostgreSQL (Database)
NGINX (Proxy server)
The app should now be running locally:

Frontend: http://localhost:3000
Backend API: http://localhost:5000
Known Issues
403 error on API routing — currently being addressed in the next iteration.

## Frontend
The frontend is built using React and handles all client-side logic.

For detailed setup instructions and additional information, see the frontend README.

## Backend
The backend is built using Flask and serves as the API to handle the restaurant's data.

For detailed setup instructions and additional information, see the backend README.

