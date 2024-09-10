require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
app.get("/", (req, res) => {
	res.send("hello world!");
});
app.get("/twitter", (req, res) => {
	res.send("hello world");
});

app.get("/login", (req, res) => {
	res.send("<h1> please login at given url</h1>");
});

app.get("/youtube", (req, res) => {
	res.send("<h2>hello</h2>");
});
app.listen(process.env.PORT, () => {
	console.log(`example app listening on port ${port}`);
});
