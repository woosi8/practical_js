// $("#btn").click(function () {
// 	const act = $(".ssss.selected");
// 	if (act != null) {
// 		act.removeClass("selected");
// 	}
// 	$(".ssss").addClass("selected");
// });

const workBtnContainer = document.querySelector("#btn");
const projectContainer = document.querySelector("#the-box");
const proejects = document.querySelectorAll(".ssss");
workBtnContainer.addEventListener("click", (event) => {
	const filter =
		event.target.dataset.filter || event.target.parentNode.dataset.filter;
	if (filter == null) {
		return;
	}
	proejects.forEach((project) => {
		if (filter === project.dataset.type) {
			project.classList.remove("invisible");
		} else {
			project.classList.add("invisible");
		}
	});
});
