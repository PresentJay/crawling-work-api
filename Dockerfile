FROM node:lts As development

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/

RUN apt-get -qy update && apt-get -qy install openssl

# Install app dependencies using the `npm ci` command instead of `npm install`
RUN npm ci

RUN npx prisma generate --schema ./prisma/schema.prisma
# start app
RUN npm run build

# Bundle app source
COPY . .
