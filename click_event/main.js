// $("#btn").click(function () {
// 	const act = $(".ssss.selected");
// 	if (act != null) {
// 		act.removeClass("selected");
// 	}
// 	$(".ssss").addClass("selected");
// });

const btn = document.querySelector("#btn");
const objects = document.querySelectorAll(".ssss");
// const projectContainer = document.querySelector("#the-box");
btn.addEventListener("click", (event) => {
	const filter =
		event.target.dataset.filter || event.target.parentNode.dataset.filter;
	if (filter == null) {
		return;
	}
	objects.forEach((project) => {
		if (filter === project.dataset.type) {
			project.classList.remove("invisible");
		} else {
			project.classList.add("invisible");
		}
	});
});
