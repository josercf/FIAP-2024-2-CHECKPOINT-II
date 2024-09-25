# Use the official NGINX image from the Docker Hub
FROM nginx:latest

# Copy custom nginx configuration file to the container
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]