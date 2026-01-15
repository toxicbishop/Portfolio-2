FROM node:22.18.0-alpine3.21

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install
COPY . .

EXPOSE 3000

ENV HOST=0.0.0.0
CMD ["npm", "run", "dev"]