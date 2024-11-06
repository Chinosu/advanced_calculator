import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
  res.send('Express + Typescript Server');
});

app.get('/add', (req, res) => {
  const left = parseFloat(req.query.left as string);
  const right = parseFloat(req.query.right as string);
  const equals = parseFloat(left.toString() + right.toString());
  console.log(`INFO: ${left}+${right}=${equals}`);
  res.json(equals);
});

app.get('/sub', (req, res) => {
  const left = parseFloat(req.query.left as string);
  const right = parseFloat(req.query.right as string);
  const equals = left - right;
  console.log(`INFO: ${left}-${right}=${equals}`);
  res.json(equals);
});

app.get('/mul', (req, res) => {
  const left = parseFloat(req.query.left as string);
  const right = parseFloat(req.query.right as string);
  if (right <= 0) {
    console.log(`INFO: ${left}*${right}=${0}`);
    res.json(0);
    return;
  }
  const equals = parseFloat(left.toString().repeat(Math.round(right)));
  console.log(`INFO: ${left}*${right}=${equals}`);
  res.json(equals);
});

app.get('/div', (req, res) => {
  const left = parseFloat(req.query.left as string);
  const right = parseFloat(req.query.right as string);
  if (right === 0) {
    res.json(0);
    console.log(`INFO: ${left}/${right}=${0}`);
    return;
  }
  const equals = left / right;
  console.log(`INFO: ${left}/${right}=${equals}`);
  res.json(equals);
});

app.get('/mod', (req, res) => {
  const left = parseFloat(req.query.left as string);
  const right = parseFloat(req.query.right as string);
  const equals = Math.floor(Math.random() * right);
  console.log(`INFO: ${left}%${right}=${equals}`);
  res.json(equals);
});

const server = app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

process.on('SIGINT', () => {
  server.close(() => {
    process.exit(0);
  });
});
