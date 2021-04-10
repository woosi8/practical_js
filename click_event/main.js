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
		if (filter === "*" || filter === project.dataset.type) {
			project.classList.remove("invisible");
		} else {
			project.classList.add("invisible");
		}
	});

	// 클릭 시 해당 엘리먼트 색상 변화 주기
	const selectElem = document.querySelector("button.selected");
	if (selectElem != null) {
		selectElem.classList.remove("selected");
	}
	// const target =event.target.nodeName === "BUTTON" ? event.target : event.target.parentNode; 버튼에 자식이 있는경우 클릭 범위 오작동을 예방하기위해
	event.target.classList.add("selected");
});
