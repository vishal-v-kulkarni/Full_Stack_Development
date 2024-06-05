var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
		var drumName = this.innerHTML;
		var audioName = "";
		if (drumName === "w") {
			audioName = "tom-1.mp3";
		} else if (drumName === "a") {
			audioName = "tom-2.mp3";
		} else if (drumName === "s") {
			audioName = "tom-3.mp3";
		} else if (drumName === "d") {
			audioName = "tom-4.mp3";
		} else if (drumName === "j") {
			audioName = "snare.mp3";
		} else if (drumName === "k") {
			audioName = "crash.mp3";
		} else {
			audioName = "kick-bass.mp3";
		}

		var audio = new Audio("./sounds/" + audioName);
		audio.play();
	});
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
