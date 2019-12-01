FROM node:alpine

WORKDIR /app

COPY . .

EXPOSE 9999

CMD node server.js
