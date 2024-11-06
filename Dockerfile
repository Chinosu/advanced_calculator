FROM node
WORKDIR /express-docker
COPY calculator_service/package.json .
RUN npm install
COPY calculator_service .
EXPOSE 3000
CMD ["npx", "tsx", "src/index.ts"]
