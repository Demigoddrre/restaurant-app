# Stage 1: Build the React app using Node.js
FROM node:14 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if present) to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application source code
COPY . ./

# Build the React app for production
RUN npm run build

# Stage 2: Serve the built files with NGINX
FROM nginx:alpine

# Remove default NGINX static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the React app build output from the previous stage to NGINX's HTML folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
