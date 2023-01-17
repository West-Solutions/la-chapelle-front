FROM node:16.3.0-alpine3.13
WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 3000
CMD ["yarn", "start"]

