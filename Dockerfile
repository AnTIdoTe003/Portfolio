FROM node:20.9.0-alpine

WORKDIR /website


COPY package*.json ./


RUN npm install --legacy-peer-deps


COPY . .


CMD ["npm", "run", "dev","--", "--host"]


EXPOSE 5173
