$(function () {
	/* ---------- 기본 사용 ---------- */

	// $(".basic_slider").bxSlider({
	// 	mode: "horizontal",
	// 	speed: 5000,
	// });

	/* ---------- 좌우 컨트롤 ---------- */

	// $(".control_slider").bxSlider({
	// 	//controls:false
	// 	// 여기에 원하는 화살표 디자인 폰트 놓는다
	// 	nextText: '<i class="fas fa-chevron-right"></i>',
	// 	prevText: '<i class="fas fa-chevron-left"></i>',
	// 	pager: true,
	// });

	// $(".img_control_slider").bxSlider({
	// 	//controls:false,
	// 	pager: true,
	// 	prevSelector: ".img_controls .imgcontrols .prev",
	// 	nextSelector: ".img_controls .imgcontrols .next",
	// });

	/* ---------- 멀티플 슬라이드 ---------- */
	$(".multiple_slider").bxSlider({
		nextText: '<i class="fas fa-chevron-right"></i>',
		prevText: '<i class="fas fa-chevron-left"></i>',
		pagerShortSeparator: "/",
		// pagerCustom"",
		minSlides: 1,
		maxSlides: 3,
		moveSlides: 3,
		slideWidth: 200,
		slideMargin: 30,
		pager: true,
	});

	/* ---------- 현재 슬라이드 구분하기 ---------- */

	// $(".active_slider").bxSlider({
	// 	onSliderLoad: function (currentIndex) {
	// 		$(".active_slider li")
	// 			.eq(currentIndex + 1)
	// 			.addClass("active");
	// 	},
	// 	onSlideAfter: function ($slideElement) {
	// 		$slideElement.addClass("active").siblings().removeClass("active");
	// 	},
	// });

	/* ---------- 슬라이드 옵션 활용 이전,다음, 슬라이드 이동 ---------- */

	/* ---------- 자동 슬라이드 ---------- */

	/* ---------- 동영상 제어하기 ---------- */

	/* ---------- 탭 연동 ---------- */
}); //document ready jquery
