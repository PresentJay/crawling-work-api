FROM node:18-slim As development

WORKDIR /usr/src/app

# Bundle app source
COPY . .

RUN apt-get -qy update && apt-get -qy install openssl && apt-get -qy install bash

RUN npm run init

