// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! The deployment is successful asif is brilliant.');
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
