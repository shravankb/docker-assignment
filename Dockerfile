#First Stage
FROM node:12 AS stage1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src src

COPY server.js server.js


#Second Stage
FROM gcr.io/distroless/nodejs as built-image

COPY --from=stage1 /app /app

WORKDIR /app

EXPOSE 8080

CMD ["server.js"]
