$(document).ready(function() {
	$(function() {
	
	});
	// 添加动画类名
	$(".tech-para .column").addClass("wow animated fadeInUp");
	//滚动条向上或向下滚动头部显示隐藏
	var state;

	$(".header").hover(function () {
		state = false;
	
	}, function () {
		state = true;
		
	})

	$(document).on("mousewheel DOMMouseScroll", function (e) {
		var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
			(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
		if (delta > 0) {
			$(".header").removeClass("on2");
			$(".prod-top-nav").removeClass("on");
		} else if (delta < 0 ) {
			$(".header").addClass("on2");
			$(".prod-top-nav").addClass("on");
		}
	});

})

$(function () {        
	//屏幕向上或向下滑动头部显示隐藏
	$(document).ready(function () {
		function GetSlideDirection(startX, startY, endX, endY) {
			var dy = startY - endY;
			//var dx = endX - startX;  
			var result = 0;
			if (dy > 0) { //向上滑动
				result = 1;
			} else { //向下滑动
				result = 2;
			}
			return result;
		}
		//滑动处理  
		var startX, startY;
		document.addEventListener('touchstart', function (ev) {
			startX = ev.touches[0].pageX;
			startY = ev.touches[0].pageY;
		}, false);
		document.addEventListener('touchend', function (ev) {
			var endX, endY;
			endX = ev.changedTouches[0].pageX;
			endY = ev.changedTouches[0].pageY;
			var direction = GetSlideDirection(startX, startY, endX, endY);
			switch (direction) {
				case 0:
					break;
				case 1:
					// 手指向上滑动
					$(".m-header").addClass("on2");
					$(".prod-top-nav").addClass("on");
					$(".prod-top-nav").removeClass("on2");
					break;
				case 2:
					// 手指向下滑动
					$(".m-header").removeClass("on2");
					if ($(window).scrollTop() <= 50) {
						$(".prod-top-nav").removeClass("on");
						$(".prod-top-nav").removeClass("on2");
					} else {
						$(".prod-top-nav").addClass("on2");
					}
					break;
				default:
			}
		}, false);
	})
})
