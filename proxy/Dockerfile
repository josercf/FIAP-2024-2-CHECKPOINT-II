# Dockerfile para o Nginx
FROM nginx:alpine

# Remove a configuração default do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia a nova configuração para o Nginx
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80