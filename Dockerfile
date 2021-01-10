# First Stage : BASE
FROM node:12-alpine AS base

WORKDIR /app

# Second Stage : Development
FROM base as development

COPY package*.json ./

RUN npm install

RUN npm i -g nodemon

COPY src src

COPY server.js server.js

CMD ["npm", "run", "dev"]

RUN npm prune --production

# Third Stage : Production
FROM gcr.io/distroless/nodejs as release

LABEL maintainer="Shravan Kumar B, shravan.kumar@nineleaps.com"

LABEL name="UserMgmtSystem"

LABEL description="Image of User Mgmt System built in Node-MongoDB"

LABEL BUILD_DATE = "28-NOV-2020"

COPY --from=development /app /app

USER nobody

WORKDIR /app

EXPOSE 8000

CMD ["server.js"]