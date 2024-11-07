FROM node
WORKDIR /calculator-service
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npx", "tsx", "src/index.ts"]
