FROM node:10

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 2000

CMD [ "npm", "start" ]
