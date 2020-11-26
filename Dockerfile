FROM node:12.15.0


# to create working app directory
WORKDIR /usr/src/app

# copy package.json and package-lock,json file
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

EXPOSE 8000

CMD [ "npm", "run", "prod" ]

