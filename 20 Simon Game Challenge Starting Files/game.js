var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var patternMatches = true;

$(document).keydown(function () {
	if (level === 0) {
		nextSequence();
	}
});

//Course Logic
$(".btn").click(function () {
	var userChosenColor = this.id;
	userClickedPattern.push(userChosenColor);

	animatePress(userChosenColor);
	playSound(userChosenColor);

	checkAnswer(userClickedPattern.length - 1);
});

function playSound(soundName) {
	var audio = new Audio("./sounds/" + soundName + ".mp3");
	audio.play();
}

function animatePress(currentColor) {
	$("#" + currentColor).addClass("pressed");
	setTimeout(function () {
		$("#" + currentColor).removeClass("pressed");
	}, 100);
}

function startOver() {
	level = 0;
	userClickedPattern = [];
	gamePattern = [];
}

//Course Logic
function checkAnswer(currentLevel) {
	if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
		console.log("Success");
		if (userClickedPattern.length === gamePattern.length) {
			setTimeout(function () {
				nextSequence();
			}, 1000);
		}
	} else {
		console.log("Wrong");
		playSound("wrong");
		$("body").addClass("game-over");

		setTimeout(function () {
			$("body").removeClass("game-over");
		}, 200);

		$("#level-title").text("Game Over, Press Any Key to Restart");
		startOver();
	}
}

function nextSequence() {
	level++;
	$("#level-title").text("Level " + level);

	var randomNumber = Math.floor(Math.random() * 4);

	var randomChosenColor = buttonColors[randomNumber];
	gamePattern.push(randomChosenColor);

	$("#" + randomChosenColor)
		.fadeOut("fast")
		.fadeIn("fast");

	playSound(randomChosenColor);
	userClickedPattern = [];
}

// My logic - Vishal Kulkarni
/* $(".btn").click(function () {
	var userChosenColor = this.id;
	userClickedPattern.push(userChosenColor);

	animatePress(userChosenColor);

	for (var i = 0; i < userClickedPattern.length; i++) {
		if (gamePattern[i] === userClickedPattern[i]) {
			patternMatches = true;
			playSound(userChosenColor);
		} else {
			patternMatches = false;
			playSound("wrong");
			$("#level-title").text("Game Over, Press Any Key to Restart");
			break;
		}
	}

	if (userClickedPattern.length == level) {
		if (patternMatches) {
			setTimeout(function () {
				nextSequence();
			}, 1000);
		}
	}

	if (!patternMatches) {
		level = 0;
		gamePattern = [];
		userClickedPattern = [];
	}
}); */
