const express = require('express');
const app = require('express');

const hostname = 'localhost';
const PORT = 3000;


app.listen(PORT, hostname ,() => {
  console.log(`Server started on ${hostname}: ${PORT}:`);
});
