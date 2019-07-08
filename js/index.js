
		
		$(".banner-box").banner({
			aimg:$(".banner-box").find("a"),			//必传
			left:$(".banner-box").find("#left"),		//可选,传了有功能，不传没有功能
			right:$(".banner-box").find("#right"),		//可选,传了有功能，不传没有功能
			isList:true,			//可选，默认为true
			autoPlay:true,			//可选，默认为true
			moveTime:200,			//可选，默认为200
			index:0
		})
	
		$(".dl-btns").find("dd").click(function(){
			$(".dl-btns").find("dd").css({background:""})
			var index = $(this).index();
			var iNowFloor = $(".floors").eq(index-1);
			$(this).css({background:"rgba(200,200,200,0.6)"})
			
			var tt = iNowFloor.offset().top;
			$("html").stop().animate({
				
				scrollTop:tt
			})
			
		})