(function(){
	
	var dl = localStorage.getItem("dl");
	var dl = JSON.parse(dl);
	if(dl==0||dl==null){
	
	}else{
		$(".ac").eq(1).html("")
		$(".ac").eq(0).html("注销")
		$(".ac").eq(0).addClass("ZX");
		$(".ZX").click(function(){
			localStorage.setItem("dl",0);
		})
	}
	
	var cc = localStorage.getItem("cc");
	var cc = JSON.parse(cc);

	if(cc){
		$("#text").val(cc[0].text)
		$("#pass").val(cc[0].pass)
		$("#e1").html("√");
	}
	$("#e1").click(function(){
		if($("#e1").html()){
			$("#e1").html("");
		}else{
			$("#e1").html("√");
		}
		
	})
	
	$("#btn").click(function(){
		var tet = $("#text").val();
		var pas = $("#pass").val();
		var b = localStorage.getItem("a");
		var b = JSON.parse(b);
		if(b==null){
			return alert("错误");
		}
		for(var i=0;i<b.length;i++){
			if(b[i].text==tet&&b[i].pass==pas){
				if($("#e1").html()){
					c= [{
				           	text:tet,
				            pass:pas
				        }];
					localStorage.setItem("cc",JSON.stringify(c))	
				}else{
					localStorage.setItem("cc",0)
				}
				localStorage.setItem("dl",1)
				window.location.href="ch.html";
			}else{
				alert("错误");
			}
		}
	})
})()
