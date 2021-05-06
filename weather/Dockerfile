FROM node:12-alpine AS BASE_PACKAGES
WORKDIR /app
RUN apk update
RUN apk add git
RUN apk add inotify-tools
COPY package.json .
RUN npm install

FROM BASE_PACKAGES
WORKDIR /app
# Environment variables
ENV NODE_ENV=production
# Copy sources
COPY . .

# Compile
RUN npm run build

CMD [ "npm", "run", "start" ]
EXPOSE 4200
