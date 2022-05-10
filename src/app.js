const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello node');
});

const port = 8000;

app.listen(port, () => {
  console.log(`server running on port ${port}...`);
});
