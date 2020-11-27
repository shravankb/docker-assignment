# First Stage : BASE
FROM node:12 AS base

WORKDIR /app

# Second Stage : Development
FROM base as development

COPY package*.json ./

RUN npm install

COPY src src

COPY server.js server.js

RUN npm prune --production 

# Third Stage : Production
FROM gcr.io/distroless/nodejs as release

COPY --from=development /app /app

WORKDIR /app

EXPOSE 8000

CMD ["server.js"]