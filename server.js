const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World !1234');
});

app.get('/test', (req, res) => {
  res.send('Testing    !!!!1');
});

app.listen(5000, () => {
  console.log(`server is running at http://localhost:${5000}`);
});
