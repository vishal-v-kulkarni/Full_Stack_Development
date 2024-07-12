import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//Use the middleware body-parser
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	console.log(_dirname);
	res.sendFile(_dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
	console.log(req.body);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
