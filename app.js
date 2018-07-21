const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;


// APP INDEX PAGE
app.get('/', (req,res) => {
  console.log(`It works`);
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});