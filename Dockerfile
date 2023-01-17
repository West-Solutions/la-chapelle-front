FROM node:16.3.0-alpine3.13
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]

