FROM node:lts AS build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM nginx:alpine AS runtime
COPY --from=build /app/dist/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
