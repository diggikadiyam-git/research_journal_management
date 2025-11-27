# Stage 1 — Build the React App
FROM node:18-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build the production version
RUN npm run build

# Stage 2 — Serve using NGINX
FROM nginx:alpine

# Copy build output to NGINX default directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose frontend port
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
