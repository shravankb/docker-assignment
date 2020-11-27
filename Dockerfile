# First Stage : BASE
FROM node:12-alpine AS base

LABEL maintained="Shravan K B shravan.kumar@nineleaps.com"

WORKDIR /app

# Second Stage : Development
FROM base as development

COPY package*.json ./

RUN npm install

RUN npm i -g nodemon

COPY src src

COPY server.js server.js

CMD ["nodemon"]

RUN npm prune --production  && npm clean cache --force

# Third Stage : Production
FROM gcr.io/distroless/nodejs as release

COPY --from=development /app /app

WORKDIR /app

EXPOSE 8000

CMD ["server.js"]