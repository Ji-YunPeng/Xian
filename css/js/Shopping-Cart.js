(function(){
var dl = localStorage.getItem("dl");
var dl = JSON.parse(dl);
if(dl==0||dl==null){
	$(".car-top2-b").css("display","block")
	$(".car-main-t").css("display","none")
	$(".bor").css("display","none")
}else{
	$(".car-top2-b").css("display","none")
	$(".ac").eq(1).html("")
	$(".ac").eq(0).html("注销")
	$(".ac").eq(0).addClass("ZX");
	var goodss = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
	var cnum = 0;
	for(var i=0;i<goodss.length;i++){
		cnum += (goodss[i].num)*1;
	}
	$(".Shopping-Cart").find("span").html(cnum);
	$(".ZX").click(function(){
		localStorage.setItem("dl",0);
	})
class Car{
	constructor(){
	 	this.CarB = document.querySelector("#CarB");
        this.url = "http://localhost:8181/json/List-of-Goods.json";
		this.init();
		this.addEvent();
		
	}
	addEvent(){
		var that = this;
        this.CarB.onclick = function(){
        	if(event.target.className == "del"){        
	            that.id = event.target.parentNode.parentNode.getAttribute("index");
	            event.target.parentNode.parentNode.remove(); 
	            console.log(event.target.parentNode.parentNode.getAttribute("index"))
	            that.setData(function(i){
	            that.goods.splice(i,1);
	            });
        	}
        }	
        this.CarB.oninput = function(){
            if(event.target.className == "changeNum"){
            that.id = event.target.parentNode.parentNode.getAttribute("index");
            that.setData(function(i){
                that.goods[i].num = event.target.value;
            });
            }
        }	
	}
    setData(callback){
            for(var i=0;i<this.goods.length;i++){
                if(this.goods[i].id == this.id){
                    callback(i);
            }
        }
        localStorage.setItem("goods",JSON.stringify(this.goods));
    }    
	init(){
		var that = this;
        ajaxGet(this.url,function(res){
            that.res = JSON.parse(res)
            console.log(that.res[0].price)
            console.log(that.res[0].price.replace("￥",""))
            that.getData();
        })
	}
	getData(){
            this.goods = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
			if(this.goods==false){
				return
			}
            this.display();    
    }
	display(){
		var numt = 0;
		var nums = 0;
		var str = "";
		for(var i=0;i<this.res.length;i++){
		 	for(var j=0;j<this.goods.length;j++){
		 		if(this.res[i].goodsId == this.goods[j].id){
		 			
		 			str += 	`
		 					<div class="car-item" index ="${this.res[i].goodsId}">
								<div class="num">
									<div class="f1"><input checked="checked" value="${this.res[i].goodsId}" class="ChD" type="checkbox"></div>
								</div>
								<div class="ProInfo">
									<a href="#"><img src="${this.res[i].src}"/></a>
									<p>${this.res[i].name}</p>
								</div>
								<div class="ProPrice">
									<span class="jiag">${this.res[i].price}</span>
									<span>${this.res[i].price1}</span>
								</div>
								<div class="quantity">
									<input type="number" value="${this.goods[j].num}" min=1 class="changeNum">
								</div>
								<div class="subtotal">${"￥"+(this.res[i].price.replace("￥","")*this.goods[j].num).toFixed(2)}</div>
								<div class="action">
									<p class="sc">收藏</p>
									<p class="del">删除</p>
								</div>
							</div>
		 					
		 					`;
		 					console.log(nums)
		 					numt+= this.goods[j].num-0;
		 					nums= nums+((this.res[i].price.replace("￥","")*this.goods[j].num).toFixed(2))*1;
		 					
		 		}
		 	}
		}
		console.log(numt)
		console.log(nums.toFixed(2))
		str = str + `<div class="car-main-bb">
					<span>已选择</span><div class="SL">${numt}</div><span>件商品</span>
					<p>总价（不含运费）</p><div class="ZJ">${nums.toFixed(2)}</div><input type="button" value="去结算" />
				</div>`
		this.CarB.innerHTML = str;
		this.checked();
		new Car1;
	}
	checked(){
		new Car1;
		$("#CBox").click(function(){
			if($("#CBox").prop("checked")){
				$("#CBox").attr("checked",true)
				$("#CBox").prop("checked",true)
				$("#CarB").find(".ChD").prop("checked",true)
			}else{
				$("#CBox").removeAttr("checked")
				$("#CarB").find(".ChD").removeAttr("checked")
			}
		})
		
		$("#CarB").find(".ChD").click(function(){
			if($("this").prop("checked")){
				$("this").attr("checked",true)
			}else{
				$("this").removeAttr("checked")
			}
		})
	}
}

new Car;
class Car1{

	constructor(){
		this.CM  = document.querySelector(".changeNum");
		this.CM.onblur = function(){
//			var goodss = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
//			var cnum = 0;
//			var nums = 0;
//			for(var i=0;i<this.res.length;i++){
//				for(var j=0;j<this.goods.length;j++){
//					if(this.res[i].goodsId == this.goods[j].id){
//						cnum += (goodss[i].num)*1;
//						nums= nums+((this.res[i].price.replace("￥","")*this.goods[j].num).toFixed(2))*1;
//					}
//				}
//			}
			window.location.reload()
			
		}
	}
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


