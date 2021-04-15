const btn = document.querySelector("#btn");
const box = document.querySelector("#the-box");
const objects = document.querySelectorAll(".ssss");

// console.log(objects.getAttribute(""));
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

// // // // // // // // // 배열 객체 공부 // // // // // // // // // // //
// querySelectorAll같은 경우 배열이 아니라 유사배열이 나온다
// 스프레드를 이용해 진짜 배열로 바꿔야 배열의 메서드를 사용가능하다
const objArr = [...objects];

//1.스프레드
const objObj = { ...[objArr] };

// 2.맵
const toObj = objArr.map((objArr) => ({ objArr }));

//////// filter 이용해 해당 값 찾기
var post = { id: 5, title: "for front-end" };
var comments = [
	{ postId: 4, content: "JavaScript first and web framework" },
	{ postId: 5, content: "HTML, CSS" },
	{ postId: 5, content: "server" },
];
function commentsPost(post, comments) {
	return comments.filter(function (comment) {
		return comment.postId === post.id;
	});
}

console.log(commentsPost(post, comments));

// // // // // // // // // // // // // // // // // // // // // // // // // // //
