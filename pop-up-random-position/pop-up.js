function randomNum(min, max) {
	const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
	return randNum;
}

function waterMark() {
	const randomPos = document.querySelector("#rand_pos");
	randomPos.classList.toggle("blink");

	const bodyWidth = window.innerWidth;
	const bodyHeight = window.innerHeight;

	let randPosX = randomNum(1, bodyWidth - 200);
	let randPosY = randomNum(1, bodyHeight - 200);

	randomPos.style.left = randPosX;
	randomPos.style.top = randPosY;
}

setInterval(() => {
	waterMark();
}, 1000);

// function waterMark() {
// 	var randomPos = document.querySelector("#rand_pos");
// 	randomPos.classList.toggle("blink");
// 	var bodyWidth = window.innerWidth;
// 	var bodyHeight = window.innerHeight;
// 	var randPosX = randomNum(1, bodyWidth - 200);
// 	var randPosY = randomNum(1, bodyHeight - 200);
// 	$("#rand_pos").css("left", randPosX);
// 	$("#rand_pos").css("top", randPosY);
// }
