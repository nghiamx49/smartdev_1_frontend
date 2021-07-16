FROM node:12.4.0-alpine as build

WORKDIR /app


COPY . /app

ARG REACT_APP_API
ENV REACT_APP_API=${REACT_APP_API}


RUN yarn install

RUN yarn build

COPY --from=build /app/build /var/www


FROM nginx:1.17.0-alpine

RUN rm -rf /usr/share/nginx/html/*
RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
