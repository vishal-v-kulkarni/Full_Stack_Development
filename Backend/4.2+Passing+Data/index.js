import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	const data = {
		message: "Write your name below!",
	};
	res.render("index.ejs", data);
});

app.post("/submit", (req, res) => {
	const nameLength = req.body["fName"].length + req.body["lName"].length;

	const data = {
		message: "You have " + nameLength + " letters in your name",
	};

	res.render("index.ejs", data);
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
