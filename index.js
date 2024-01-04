import express from 'express';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!, SSL certificate is working!');
});

app.listen(443);
