FROM node:lts-buster

RUN npm i

COPY . .

CMD ["node", "main.js"]
