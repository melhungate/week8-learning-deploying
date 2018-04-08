const config = require('config');
const express = require("express");
const path = require('path');
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || config.PORT;
const MONGODB_URI = process.env.MONGODB_URI || config.MONGODB_URI;

mongoose.connect(MONGODB_URI);

app.use('/', express.static(
	path.join(__dirname, '../build')
))

app.get("/hello", (req, res) => {
  res.status(200).json({
    message: "hello world"
  });
});

app.get('*', (req, res) => {
	res.sendFile(
		path.join(__dirname, '../build/index.html')
	)
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
