const express = require('express'); // include third party module
const app = express();
const port = 3000;

// GET API
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// POST API
app.post('/', (req, res) => {
  res.send('Got a POST request');
});

// PUT API
app.put('/', (req, res) => {
  res.send('Got a PUT request');
});

// DELETE API
app.delete('/', (req, res) => {
  res.send('Got a DELETE request');
});

// Listening on port 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})