FROM node:18-alpine

WORKDIR /app

COPY  package.json .

RUN npm install

COPY /dist .

EXPOSE 8080

CMD [ "npm", "start"]