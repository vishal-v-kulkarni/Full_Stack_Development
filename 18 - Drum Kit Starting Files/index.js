var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//Detecting Button Press
for (var i = 0; i < numberOfDrumButtons; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
		var drumName = this.innerHTML;
		makeDrumSounds(drumName);
		drumAnimation(drumName);
	});
}

//Detecting Key Press
document.addEventListener("keydown", function (event) {
	makeDrumSounds(event.key);
	drumAnimation(event.key);
});

function makeDrumSounds(key) {
	var audioName = "";
	switch (key) {
		case "w":
			audioName = "tom-1.mp3";
			break;
		case "a":
			audioName = "tom-2.mp3";
			break;
		case "s":
			audioName = "tom-3.mp3";
			break;
		case "d":
			audioName = "tom-4.mp3";
			break;
		case "j":
			audioName = "snare.mp3";
			break;
		case "k":
			audioName = "crash.mp3";
			break;
		case "l":
			audioName = "kick-bass.mp3";
			break;
		default:
			console.log(key);
	}

	if (audioName !== "") {
		var audio = new Audio("./sounds/" + audioName);
		audio.play();
	}
}

function drumAnimation(currentKey) {
	var activeDrumKey = document.querySelector("." + currentKey);

	activeDrumKey.classList.add("pressed");

	setTimeout(function () {
		activeDrumKey.classList.remove("pressed");
	}, 100);
}

// function add(num1, num2) {
// 	return num1 + num2;
// }

// function subtract(num1, num2) {
// 	return num1 - num2;
// }

// function multiply(num1, num2) {
// 	return num1 * num2;
// }

// function divide(num1, num2) {
// 	return num1 / num2;
// }

// function calculator(num1, num2, operator) {
// 	return operator(num1, num2);
// }
