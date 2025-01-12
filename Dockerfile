FROM node:20-alpine

ENV VITE_PORT=3000
ENV VITE_HOST=0.0.0.0

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]