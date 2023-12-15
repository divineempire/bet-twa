FROM node:16.20.0 as builder

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .


RUN yarn build

FROM nginx:1.19.6

COPY .docker/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]