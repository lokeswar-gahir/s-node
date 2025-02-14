FROM node:21-alpine

COPY . /app
WORKDIR /app

RUN npm install
ENTRYPOINT ["node", "main.js"]