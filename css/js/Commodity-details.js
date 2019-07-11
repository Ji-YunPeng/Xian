(function(){
	var dl = localStorage.getItem("dl");
var dl = JSON.parse(dl);
if(dl==0||dl==null){

	
}else{
	
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
}
	
	
	function getUrlParam(name) {
           var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
           var r = window.location.search.substr(1).match(reg);  
           if (r != null) return unescape(r[2]); return null; 
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
	
	class RenderPage{
		constructor(){
			this.id = getUrlParam("id");
			this.url = "http://localhost:8181/json/List-of-Goods.json";
			this.Com = document.querySelector("#Com-C");
			console.log(this.id)
			this.inits();
		}
		inits(){
			var that = this;
		 	ajaxGet(this.url,function(res){
//          	console.log(res)
            	that.res = JSON.parse(res);
            	that.getDatas();
    		})
		}
		getDatas(){
			this.goods = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
			console.log(this.goods)
			this.val = [1];
			for(var j=0;j<this.goods.length;j++){
				if(this.id == this.goods[j].id){
					this.val.push(this.goods[j].num);
					
				}else{
					this.val.push(1);
				}
			}
			this.displays();
		}
		displays(){
			var max = Math.max.apply(Math,this.val);
			console.log(this.val)
			var str = "";
			for(var i=0;i<this.res.length;i++){
				if(this.res[i].goodsId == this.id){
//					console.log(this.res[i])
					str += 	`
								<div class="Com-C-L">
									<div class="Com-C-L-T">
										<div class="sbox">
											<img src="${this.res[i].src}" />
											<span></span>
											<p></p>
										</div>
										<div class="bbox">
											<img src="${this.res[i].src}" />
										</div>
									</div>
									<div class="Com-C-L-B">
										<img src="${this.res[i].src}"  class="acd"/>
										<img src="https://img1.tianhong.cn/upload/pd/m/yyml_jksp_4431/20164/8f26abe297f3439eab76f53dfaf2b88e_220x220.jpg" />
									</div>
								</div>
								<div class="Com-C-C">
									<div class="name">${this.res[i].name}</div>
									<div class="Commodity-Number">
										<span>商品编号</span>
										<span class="C-N">${this.id}</span>
									</div>
									<div class="Price">
										<span>商品价格</span>
										<span class="C-P">${this.res[i].price}</span>
									</div>
									<div>
										<span>商品库存</span>
										<span>充足</span>
									</div>
									<div>
										<span>是否包邮</span>
										<span>全国包邮</span>
									</div>
									<div>
										<span>发货时间</span>
										<span>当日发货</span>
									</div>
									<div class="Q-of-C" id="QOC">
										<em id="emL">-</em>
										<input type="text" value="${max}" id="text" />
										<em id="emR">+</em>
									</div>
									<div class="btns">
										<input type="button" value="立即购买" id="btn1" />
										<input type="button" value="加入购物车" id="btn2" />
									</div>
								</div>
								<div class="Com-C-B">
									<div class="Com-C-T">
									
									</div>
									<div class="Com-C-C">
										
									</div>
									<div class="Com-C-B">
										
									</div>
								</div>
				
					
							`;
				}
			}
			this.Com.innerHTML = str;
			this.FunctionStartup();
		}
		FunctionStartup(){
			new Magnifier();
			new GList(this.id);
		}
			
		
	}
	new RenderPage;
	
	
	class GList{
		constructor(a){
			this.QOFC = document.querySelector("#QOC");
			this.idG = a;
			this.eL = document.querySelector("#emL");
			this.eR = document.querySelector("#emR");
			this.text = document.querySelector("#text");
			this.btn = document.querySelector("#btn2");
			this.indexG = this.text.value;
			this.n = 1;
			console.log(this.idG)
			console.log(this.indexG)
			this.addEventG();
		}
		addEventG(){
			this.text = document.querySelector("#text");
			this.eL = document.querySelector("#emL");
			this.eR = document.querySelector("#emR");
			this.indexG = this.text.value;
			var that = this;
			this.eL.onclick = function(){
				that.n = -1;
				that.indexGx(); 
				
			}
			this.eR.onclick = function(){
				that.n = 1;
				that.indexGx();
			}
		}
		indexGx(){
			if(this.n==1){
				this.indexG++;
			}else{
				this.indexG--;
				if(this.indexG<1){
					this.indexG = 1;
				}
			}
			this.displayG();
		}
		displayG(){
			var str = 	`
							<em id="emL">-</em>
							<input type="text" value="${this.indexG}" id="text" />
							<em id="emR">+</em>
			
						`;
			this.QOFC.innerHTML = str;
			this.displayGT();
			
		}
		displayGT(){
			this.addEventG();
			this.GaddC();
			this.GaddB();
		}
		GaddB(){
			var that = this;
			this.text.onblur = function(){
				that.indexG = that.text.value;
				that.GaddC();
				console.log(that.indexG)
			}
		}
		GaddC(){
			
			var that = this;
			this.btn.onclick = function(){
				that.setDataG();
				
			}
		}
		setDataG(){
			this.goods = localStorage.getItem("goods");
		 	if(this.goods){
                this.goods = JSON.parse(this.goods)
                var onoff = true;
                for(var i=0;i<this.goods.length;i++){
                    if(this.goods[i].id == this.idG){
                        this.goods[i].num = this.indexG;
                        onoff = false;
                    }
                }
                if(onoff){
                    this.goods.push({
                        id:this.idG,
                        num:this.indexG
                    })
                }
           	}else{
                this.goods = [{
                    id:this.idG,
                    num:this.indexG
                }];
            }         
            localStorage.setItem("goods",JSON.stringify(this.goods))
		}
	}
	
	
	function Magnifier(){
			this.sBox = $(".sbox");
			this.bBox = $(".bbox");
			this.sSpan = $(".sbox span");
			this.bImg = $(".bbox img");
			this.addEvent();
		}
		Magnifier.prototype.init = function(){
			var w = this.bImg.width()/this.bBox.width();
			var h = this.bImg.height()/this.bBox.height();
			this.sSpan.css({
				"width":this.sBox.width()/w + "px",
				"height":this.sBox.height()/h + "px"
			});
			
		}
		Magnifier.prototype.addEvent = function(){
			var that = this;
			this.sBox.on("mouseover",function(){
				that.over();
				that.init();
			})
			this.sBox.on("mouseout",function(){
				that.out();
			})
			this.sBox.on("mousemove",function(eve){
				var e = eve || window.event;
				that.move(e);
			})
		}
		Magnifier.prototype.over = function(){
			this.bBox.css("display","block");
			this.sSpan.css("display","block");
		}
		Magnifier.prototype.out = function(){
			this.bBox.css("display","none");
			this.sSpan.css("display","none");
		}
		Magnifier.prototype.move = function(e){
			var l = e.offsetX - this.sSpan.width()/2;
			var t = e.offsetY - this.sSpan.height()/2;
			
			if(l<0){
				l=0;
			} 
			if(l>this.sBox.width() - this.sSpan.width()){
				l=this.sBox.width() - this.sSpan.width();
			}
			if(t<0){
				t=0;
			}
			if(t>this.sBox.height() - this.sSpan.height()){
				t=this.sBox.height() - this.sSpan.height();
			}
			
			this.sSpan.css("left",l + "px");
			this.sSpan.css("top",t + "px");
			
			var x = l/(this.sBox.width() - this.sSpan.width());
			var y = t/(this.sBox.height() - this.sSpan.height());
			
			
			this.bImg.css({
				"left":-x*(this.bImg.width() - this.bBox.width())+"px",
				"top":-y*(this.bImg.height() - this.bBox.height())+"px"
			});
			
		}
		
})()
