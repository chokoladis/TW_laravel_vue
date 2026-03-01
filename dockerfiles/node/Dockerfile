FROM node:25.2.1-alpine
LABEL org.opencontainers.image.authors="github@chokoladis"

WORKDIR /var/www/tw_app

COPY package*.json vite.config.js* ./

#RUN npm install npm@11.6.2 -g && npm install npm@11.6.2
RUN npm ci

COPY . .
RUN ls
#RUN npm run build

CMD ["npm", "run", "dev", "--", "--host"]
