(function(){
var dl = localStorage.getItem("dl");
var dl = JSON.parse(dl);
if(dl==0||dl==null){

	
}else{
	
	$(".ac").eq(1).html("")
	$(".ac").eq(0).html("注销")
	$(".ac").eq(0).addClass("ZX");
	$(".banner-r-t-t-r").css("justify-content","center")
	$(".banner-r-t-t-r").find("a").eq(0).css("display","none")
	$(".banner-r-t-t-r").find("a").eq(1).css("display","none")
	$(".banner-r-t-t-r").find("a").eq(2).css("display","block")
	var goodss = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
	var cnum = 0;
	for(var i=0;i<goodss.length;i++){
		cnum += (goodss[i].num)*1;
	}
	$(".Shopping-Cart").find("span").html(cnum);
	$(".ZX").click(function(){
		localStorage.setItem("dl",0);
	})
}
	
	
	
		$(".banner-box").banner({
			aimg:$(".banner-box").find("a"),			//必传
			left:$(".banner-box").find("#left"),		//可选,传了有功能，不传没有功能
			right:$(".banner-box").find("#right"),		//可选,传了有功能，不传没有功能
			isList:true,			//可选，默认为true
			autoPlay:true,			//可选，默认为true
			moveTime:200,			//可选，默认为200
			index:0
		})
	
		var arr = [];
			for(var i=0; i<$(".floors").length; i++ ){
				arr.push($(".floors").eq(i).offset().top)
			}
		$(document).scroll(function(){
			var y = $(document).scrollTop();
			if(y<arr[0]){
				$(".dl-btns").fadeOut(1000);
			}
			if(y>arr[0]){
				$(".dl-btns").fadeIn(1000);
			}
			for(var i=0; i<arr.length;i++){
				if(arr[i]>=y){
					
					$(".dl-btns").find("dd").css({background:""})
					$(".dl-btns").find("dd").eq(i).css({background:"rgba(231,161,113,0.8)"})
					return
				}
			}
		})
	
		$(".dl-btns").find("dd").click(function(){
			$(".dl-btns").find("dd").css({background:""})
			var index = $(this).index();
			var iNowFloor = $(".floors").eq(index-1);
			$(this).css({background:"rgba(231,161,113,0.8)"})
			
			var tt = iNowFloor.offset().top;
			$("html").stop().animate({
				
				scrollTop:tt
			})
			
		})
			
		
		class Tab{
			constructor(){
				this.ARO = document.querySelector("#ARO");
				this.url = "http://localhost:8181/json/List-of-Goods.json";
				this.init();
			}
			init(){
				var that = this;
		 		ajaxGet(this.url,function(res){
		 			that.res = JSON.parse(res);
            		that.display();
		 		})
			}
			display(){
				var num = 0;
				var str = "";
				for(var j=0;j<4;j++){
					var strr = "";
					for(var i=num*6;i<num*6+6;i++){
						strr += 	`
									<li><a href="http://localhost:8181/Commodity-details.html?id=${this.res[i].goodsId}">
									<img src=${this.res[i].src} />
									<h4>${this.res[i].name}</h4>
									<p>${this.res[i].price}</p>
									</a></li>	
									`	
					}
					num++;
					str += 	`<div class="AgourmetR-b-r none AgourmetR" id="AgourmetR-2"><ul class="clear" id="adm">${strr}</ul></div>`;
				}
				this.ARO.innerHTML = str;
				this.ARODIS();
			}
			ARODIS(){
				new Black;
			}
		}
		new Tab;
		
		class Black{
			constructor(){
				this.cont = $(".AgourmetR")
				this.Ali = $("#urls").find("li");
				console.log(this.Ali)
				console.log(this.cont)
				$("#urls").find("li").mouseover(function(){
					console.log($(this).index())
//					$(this).index()
					$("#urls").find("li").removeClass("acaea")
					$(this).addClass("acaea")
					$(".AgourmetR").addClass("none")
					$(".AgourmetR").eq($(this).index()).removeClass("none")
				})
			}
		}
		
		
	function ajaxGet(url,callback,data){
        data = data ? data : {};
        var str = "";
        for(var i in data){
            str = str + `${i}=${data[i]}&`;
        }
        var d = new Date();
        url = url + "?" + str + "__qft="+d.getTime(); 
        
        var xhr = new XMLHttpRequest();
        xhr.open("get",url,true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                callback(xhr.responseText)
            }
        }
        xhr.send();
    }
		
})()
		
		