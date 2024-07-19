import express from "express";

const app = express();
const port = 3000;

//Function for logging and use this in the middleware
function logger(req, res, next) {
	console.log("Request method", req.method + req.url);
	next(); //This is very important. Without this it will not exit the middleware.
}

//Custom middleware using the function above
app.use(logger);

app.get("/", (req, res) => {
	res.send("Hello");
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
