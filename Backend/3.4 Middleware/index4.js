import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

//Use this custom middleware to add the bandname
function bandNameGenerator(req, res, next) {
	console.log(req.body);
	bandName = req.body["street"] + req.body["pet"];
	next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
	res.send(
		`<h1>Your Bandname is: </h1><h2>${req.body.street + req.body.pet}</h2>`
	);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
