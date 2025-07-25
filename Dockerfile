FROM node:20 as build-stage
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=build-stage /app/dist/mim-viewer /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY ./runtime-config.template.js /usr/share/nginx/html/assets/runtime-config.js

CMD ["/bin/sh", "-c", "envsubst < /usr/share/nginx/html/assets/runtime-config.js > /usr/share/nginx/html/assets/runtime-config.js && exec nginx -g 'daemon off;'"]
