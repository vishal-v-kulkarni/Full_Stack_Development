import express from "express";
import axios from "axios";

const app = express();
const port = 3001;
const API_URL = "https://secrets-api.appbrewery.com";

// TODO: Replace the values below with your own before running this file.
const yourUsername = "vishal";
const yourPassword = "vishal";
const yourAPIKey = "f7cad544-8496-4904-8977-972558e5b48f";
const yourBearerToken = "0ccfb05c-8bce-49b9-bb08-b446b587e006";

app.get("/", (req, res) => {
	res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
	try {
		const result = await axios.get(API_URL + "/random");
		res.render("index.ejs", { content: JSON.stringify(result.data) });
	} catch (error) {
		res.status(404).send(error.message);
	}
});

app.get("/basicAuth", async (req, res) => {
	try {
		const result = await axios.get(API_URL + "/all?page=2", {
			auth: {
				username: yourUsername,
				password: yourPassword,
			},
		});
		res.render("index.ejs", { content: JSON.stringify(result.data) });
	} catch (error) {
		res.status(404).send(error.message);
	}
});

app.get("/apiKey", async (req, res) => {
	try {
		const result = await axios.get(API_URL + "/filter", {
			params: {
				score: 5,
				apiKey: yourAPIKey,
			},
		});
		res.render("index.ejs", { content: JSON.stringify(result.data) });
	} catch (error) {
		res.status(404).send(error.message);
	}
});

const config = {
	headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.get("/bearerToken", async (req, res) => {
	try {
		const result = await axios.get(API_URL + "/secrets/2", config);
		res.render("index.ejs", { content: JSON.stringify(result.data) });
	} catch (error) {
		res.status(404).send(error.message);
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
