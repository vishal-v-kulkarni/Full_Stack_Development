import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	const date = new Date();
	//var date = new Date("July 21, 2024");
	const day = date.getDay();
	let dayType = "";
	let message = "";

	if (day === 0 || day === 6) {
		dayType = "the weekend";
		message = "time to have fun!";
	} else {
		dayType = "a weekday";
		message = "time to work hard!";
	}

	res.render("index.ejs", {
		dayType: dayType,
		message: message,
	});
});

app.listen(3000, () => {
	console.log(`Server is listening on Port ${port}`);
});
