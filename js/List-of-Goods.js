(function(){
	class GoodsList{
		 constructor(options){
		 	this.left = options.left;
			this.right = options.right;
			this.pageList = options.pageList;
			this.url = options.url;
			this.num = options.num;
			this.index = options.index;
		 	this.cont = options.cont;
		 	this.n = 1;
		 	this.init();
		 	this.addEvent();
		 	this.aP();
		 }
		 init(){
		 	var that = this;
		 	ajaxGet(this.url,function(res){
//          	console.log(res)
            	that.res = JSON.parse(res);
            	that.Num();
            	that.display();
    		})
		 }
		 Num(){
		 	this.maxNum = Math.ceil(this.res.length/this.num);
			var str = "";
			for(var i = 0 ; i<this.maxNum;i++){
				str += `<li>${i+1}</li>`;
			}
			this.pageList.innerHTML = str;
			
			this.ali = document.querySelectorAll("#pageList li");
			this.onclick();
			this.active();
		 }
		 onclick(){
		 	var that = this;
			for(var i = 0;i<this.ali.length;i++){
				this.ali[i].inym = i
				this.ali[i].onclick = function(){
					that.index = this.innerHTML-1;
					that.active();
					that.display();
				}
			}
		 }
		 active(){
		 	for(var i=0;i<this.ali.length;i++){
				this.ali[i].className = "";
			}
			this.ali[this.index].className = "active";
		 }
		 aP(){
		 	var that = this;
			this.left.onclick = function(){
				that.n = -1;
				that.Index();
			}
			this.right.onclick = function(){
				that.n = 1;
				that.Index();
			}
		 }
		 Index(){
		 	if(this.n==1){
				if(this.index==this.maxNum-1){
					this.index = 0;
				}else{
					this.index++;
				}
			}else{
				if(this.index==0){
					this.index = this.maxNum-1;
				}else{
					this.index--;
				}
			}
			this.active();
			this.display();
		 }
		 display(){
		 	var str = "";
		 	for(var i = this.index * this.num;i<this.index * this.num + this.num;i++){
		 	 	if(i<this.res.length){
		 	 		str +=	`<li clss="box" index = "${this.res[i].goodsId}">
							<a href="http://localhost:8181/Commodity-details.html?${this.res[i].goodsId}">
								<img src="${this.res[i].src}" />
							</a>
							<div class="ac">
								<a href="http://localhost:8181/Commodity-details.html?${this.res[i].goodsId}">${this.res[i].name}</a>
							</div>
							<div class="price">
								<span>${this.res[i].price}</span>
								<span>${this.res[i].price1}</span>
								<i>${this.res[i].support}</i>
							</div>
							<div class="btns">
								<s class="addCar">放入购物车</s>
								<a href="#">收藏</a>
								<a href="#"><em></em><p>对比</p></a>
							</div>
						</li>`;
		 	 	}
		 	}
		 	this.cont.innerHTML = str;
		 }
		 addEvent(){
		 	var that = this;
            this.cont.onclick = function(eve){
                var e = eve || window.event;
                var t = e.target || e.srcElement;
                if(t.className == "addCar"){
                    that.id = t.parentNode.parentNode.getAttribute("index");
                    that.setData();
                }
            }
		 }
		 setData(){
		 	this.goods = localStorage.getItem("goods");
		 	 if(this.goods){
                this.goods = JSON.parse(this.goods)
                var onoff = true;
                for(var i=0;i<this.goods.length;i++){
                    if(this.goods[i].id == this.id){
                        this.goods[i].num++;
                        onoff = false;
                    }
                }
                if(onoff){
                    this.goods.push({
                        id:this.id,
                        num:1
                    })
                }
           }else{
                this.goods = [{
                    id:this.id,
                    num:1
                }];
            }         
            localStorage.setItem("goods",JSON.stringify(this.goods))
		 }
	}
	new GoodsList({
		left : document.querySelector("#btnL"),
		right : document.querySelector("#btnR"),
		pageList : document.querySelector("#pageList"),
		cont : document.querySelector("#cont"),
		url : "http://localhost:8181/json/List-of-Goods.json",
		num : 16,
		index : 0
	});
	var tex = document.getElementById("tex7");
	var btn = document.getElementById("btn7");
	btn.onclick = function(){
		var t = tex.value;
		new GoodsList({
			left : document.querySelector("#btnL"),
			right : document.querySelector("#btnR"),
			pageList : document.querySelector("#pageList"),
			cont : document.querySelector("#cont"),
			url : "http://localhost:8181/json/List-of-Goods.json",
			num : 16,
			index :t-1
		});
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

    