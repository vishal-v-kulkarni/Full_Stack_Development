import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
	.prompt([
		{
			type: "input",
			name: "link",
			message: "Please enter the link to generate QR-code",
			default: "www.google.com",
		},
	])
	.then((answers) => {
		console.log(answers.link);
		var link = answers.link;

		// Create Image using QR-Image package
		var qr_svg = qr.image(link, { type: "png" });
		qr_svg.pipe(fs.createWriteStream("Link-QR.png"));

		//Write the link to a file
		fs.writeFile("QR-link.txt", link, (err) => {
			if (err) throw err;
			console.log("The link has been saved to a file");
		});
	})
	.catch((error) => {
		if (error.isTtyError) {
			console.log("Prompt couldn't be rendered in the current environment");
		} else {
			throw error;
		}
	});

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
