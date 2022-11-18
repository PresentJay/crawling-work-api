FROM node:18-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

# Install app dependencies using the `npm ci` command instead of `npm install`
RUN npm ci

# Bundle app source
COPY . .
