FROM node:20-alpine

WORKDIR /myApp

COPY /package*.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "start"]