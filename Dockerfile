FROM node:12.4.0-alpine as build

WORKDIR /app


COPY . /app

ARG REACT_APP_API
ENV REACT_APP_API=${REACT_APP_API}


RUN yarn install

RUN yarn build

FROM nginx:1.17.0-alpine

RUN rm -rf /usr/share/nginx/html/*
RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html

VOLUME [ "/etc/letsencrypt" ]

EXPOSE 80 443
