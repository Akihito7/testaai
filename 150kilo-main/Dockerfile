FROM node
WORKDIR /app
ENV API_PORT=3001
COPY . .
RUN npm install
ENTRYPOINT [ "npm", "start" ]
