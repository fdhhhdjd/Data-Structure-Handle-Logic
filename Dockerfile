FROM node:12.16.2-alpine

WORKDIR /app

COPY . . 

RUN npm install -g nodemon && npm install --production

EXPOSE 5000

CMD [ "npm","run","dev"]