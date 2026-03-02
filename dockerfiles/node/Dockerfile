FROM node:25.2.1-alpine
LABEL org.opencontainers.image.authors="github@chokoladis"

WORKDIR /var/www/tw_app

COPY package*.json ./

RUN npm install npm@11.6.2 --include=optional

COPY . .
RUN npm run build

CMD ["npm", "run", "dev", "--", "--host"]
