const path = require('path');
// Node modules
const express = require('express');

// Files
var {mongoose} = require('./mongoose/mongoose');

// ---------------------- //
const app = express();

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.render('../public/index.html');
});




app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
