# Stage 1: Build the Angular app
FROM node:18 AS build
WORKDIR /app

# Install Node dependencies
COPY package*.json ./
RUN npm install

# Copy all source code and build
COPY . .
RUN npm run build --prod

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/calendar-app /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]