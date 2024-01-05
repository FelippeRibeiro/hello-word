import express from 'express';

const app = express();

app.use(express.static('public'));

app.get('/hello', (req, res) => {
  console.log("Request incoming");
  res.send('Hello World!, SSL certificate is working!');
});

app.listen(80,()=>{
 console.log("Server running")
});
