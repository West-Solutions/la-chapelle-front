FROM node:18.16.0-alpine3.16
WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 3000
CMD ["yarn", "start"]

