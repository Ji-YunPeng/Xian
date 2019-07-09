(function(){
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
		new Magnifier();
})()
