(function(){
	$("#btn").click(function(){
		var tet = $("#text").val();
		var pas = $("#pass").val();
		var b = localStorage.getItem("a");
		var b = JSON.parse(b);
		for(var i=0;i<b.length;i++){
			if(b[i].text==tet&&b[i].pass==pas){
				open:'http://localhost:8181/ch.html';
			}else{
				
			}
		}
	})
})()
