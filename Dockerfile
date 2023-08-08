# Stage 1: Install Node.js and dependencies
FROM node:18-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all the source code to the container
COPY . .

# Build the React app (assumes your React app has a build script)
RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s", "build"]

# Expose the port that the web server listens to (default is 80 for Nginx)
EXPOSE 3000