(function(){
	$("form").validate();
	$("#btn").click(function(){
		var tet = $("#text1").val();
		var pas = $("#pass").val();
		var b =  localStorage.getItem("a");
		   if(b){
                b = JSON.parse(b)
                var onoff = true;
                for(var i=0;i<b.length;i++){
                    if(b[i].text == tet||tet==""||pas==""){
                       return
                    }
                }
                if(onoff){
                    b.push({
                       	text:tet,
                    	pass:pas
                    })
                }
           }else{
           	if(tet==""&&pas==""){
           		return
           	}else{
           		b = [{
                    text:tet,
                    pass:pas
                }];
           	}
                
            }
            localStorage.setItem("a",JSON.stringify(b))
	})
})()
