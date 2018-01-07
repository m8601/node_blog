const express = require('express');

const app = express();

var port = 3000;

app.get('/', (req, res) => {
  res.send('hello')
});




app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
