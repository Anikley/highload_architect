FROM node:9.4

# Create app directory
WORKDIR /usr/src/app

# Copy source code to image
FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

# Expose port for service
EXPOSE 3000

CMD [ "node", "./bin/www" ]