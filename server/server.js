const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Static middleware
app.use(express.static(path.join(__dirname, '../public')));

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

// 404 
app.use(function(req, res, next) {
  const err = new Error('not found.');
  err.status = 404; 
  next(err);
});

// 500
app.use((err, req, res) => {
  console.error('This is the error from server.js ', err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal servers error ');
});

app.listen(PORT, () => console.log(`Serever is listening on PORT: ${PORT}`));