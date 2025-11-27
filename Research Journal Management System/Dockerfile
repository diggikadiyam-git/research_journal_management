# Stage 1 — Build the frontend
FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2 — Serve with NGINX
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copy Vite/React dist folder
COPY --from=build /app/dist .

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
