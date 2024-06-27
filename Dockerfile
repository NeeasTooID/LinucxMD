FROM node:lts-buster

RUN yarn

COPY package.json .

COPY . .

EXPOSE 5100

CMD ["node", "index.js"]
