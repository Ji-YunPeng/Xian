(function(){
//	$("form").validate();
//	$("#btn").click(function(){
//		var tet = $("#text1").val();
//		var pas = $("#pass").val();
//		var b =  localStorage.getItem("a");
//		   if(b){
//              b = JSON.parse(b)
//              var onoff = true;
//              for(var i=0;i<b.length;i++){
//                  if(b[i].text == tet||tet==""||pas==""){
//                     return
//                  }
//              }
//              if(onoff){
//                  b.push({
//                     	text:tet,
//                  	pass:pas
//                  })
//              }
//         }else{
//         	if(tet==""&&pas==""){
//         		return
//         	}else{
//         		b = [{
//                  text:tet,
//                  pass:pas
//              }];
//         	}
//              
//          }
//          localStorage.setItem("a",JSON.stringify(b))
//	})

	class Rp{
		 	constructor(){
		 		this.AN = 0;
		 		this.AccountNumber();
		 		this.SP = 0;
		 		this.SettingPassword();
		 		this.CP = 0;
		 		this.Confirmpassword();
		 		this.PN = 0;
		 		this.Phonenumber();
		 		this.VC = 0;
		 		this.VerificationCode();
		 		this.SM = 0;
		 		this.ShortMessage();
		 		this.CA = 0;
		 		this.ConsentAgreement();
		 		this.Determine();
		
		 		
		 	}
		 	AccountNumber(){
		 		this.txt1 = document.querySelector("#text1");
		 		this.txt1.onfocus = function(){
		 			console.log(1)
		 			$(".Account-Number").find("p").css("display","block")	
		 		}
		 		var that = this;
		 		this.txt1.onblur = function(){
		 			var reg = /^\D{1}\w{3,19}$/;
		 			if(this.value ==""){
						this.value = "";
					}else if(reg.test(this.value)){
						that.AN = 1;
						$(".Account-Number").find("p").css("display","block").html("√")
						$(".Account-Number").find("s").css("display","none")
	
					}else{
						that.AN = 0;
						$(".Account-Number").find("p").css("display","block").html("不能以数字开头，长度在4-20位之间")
						$(".Setting-Password").find("s").css("display","inline")
					}
		 		}
		 	}
		 	SettingPassword(){
		 		this.pas = document.querySelector("#pass");
		 		this.pas.onfocus = function(){
		 			console.log(1)
		 			$(".Setting-Password").find("p").css("display","block")	
		 		}
		 		var that = this;
		 		this.value1 = "";
		 		this.pas.onblur = function(){
		 			var reg = /^\D{1}\w{5,19}$/;
		 			if(this.value ==""){
						this.value = "";
					}else if(reg.test(this.value)){
						that.SP = 1;
						$(".Setting-Password").find("p").css("display","block").html("√")
						$(".Setting-Password").find("s").css("display","none")
						that.Confirmpassword();
						that.value1 = that.pas.value

					}else{
						that.SP = 0;
						$(".Setting-Password").find("p").css("display","block").html("长度在5-20位之间")
						$(".Setting-Password").find("s").css("display","inline")
					}
		 		}
		 	}
		 	Confirmpassword(){
		 		this.pas1 = document.querySelector("#pass1");
		 		this.value1 = this.pas.value;
		 		this.pas1.onfocus = function(){
		 			$(".Confirm-password").find("p").css("display","block")	
		 		}
		 		var that = this;
		 		this.pas1.onblur = function(){
		 			
		 			if(this.value ==""){
						this.value = "";
					}else if(this.value == that.value1){
						that.CP = 1;
						$(".Confirm-password").find("p").css("display","block").html("√")
						$(".Confirm-password").find("s").css("display","none")
					}else{
						that.CP = 0;
						$(".Confirm-password").find("p").css("display","block").html("长度在5-20位之间")
						$(".Confirm-password").find("s").css("display","inline")
					}
		 		}
		 	}
		 	Phonenumber(){
		 		var reg = /^1[0-9]{10,12}$/;
		 		this.tel = document.querySelector("#tel");
		 		this.tel.onfocus = function(){
		 			$(".Phone-number").find("p").css("display","block")	
		 		}
		 		var that = this;
		 		this.tel.onblur = function(){
		 			if(this.value ==""){
						this.value = "";
					}else if(reg.test(this.value)){
						that.PN = 1;
						$(".Phone-number").find("p").css("display","block").html("√")
						$(".Phone-number").find("s").css("display","none")
					}else{
						that.PN = 0;
						$(".Phone-number").find("p").css("display","block").html("错误")
						$(".Phone-number").find("s").css("display","inline")
					}
		 		}
		 	}
		 	VerificationCode(){
		 		this.txt2 = document.querySelector("#text2");
		 		this.txt2.onfocus = function(){
		 			$(".Verification-Code").find("p").css("display","block")	
		 		}
		 		var that = this;
		 		this.txt2.onblur = function(){
					if(!this.value==""){
						that.VC = 1;
						$(".Verification-Code").find("p").css("display","block").html("√")
						$(".Verification-Code").find("s").css("display","none")
					}else{
						that.VC = 0;
						$(".Verification-Code").find("p").css("display","block").html("错误")
						$(".Verification-Code").find("s").css("display","inline")
					}
		 		}
		 		
		 	}
		 	ShortMessage(){
		 		this.txt3 = document.querySelector("#text3");
		 		this.txt3.onfocus = function(){
		 			$(".Short-Message").find("p").css("display","block")	
		 		}
		 		var that = this;
		 		this.txt3.onblur = function(){
					if(!this.value==""){
						that.SM = 1;
						$(".Short-Message").find("p").css("display","block").html("√")
						$(".Short-Message").find("s").css("display","none")
					}else{
						that.SM = 0;
						$(".Short-Message").find("p").css("display","block").html("错误")
						$(".Short-Message").find("s").css("display","inline")
					}
		 		}
		 	}
		 	ConsentAgreement(){
		 		this.cbox = document.querySelector("#cbox");
		 		var that = this;
		 		var n = 0;
		 		this.cbox.onclick = function(){
		 			n++;
		 			if(n%2==0){
		 				that.CA = 1;
		 			}
		 		}
		 		
		 	}
		 	Determine(){
		 		var that = this;
		 			$("#btn").click(function(){
		 				
		 				if(that.SM == 1&&that.VC == 1&&that.PN==1&&that.SM == 1&&that.CP == 1&&that.SP == 1&&that.AN == 1){
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
		 				}else{
		 					console.log(that.SM,that.VC,that.PN,that.SM,that.CP,that.SP,that.AN)
		 					return alert("错误");
		 					
		 				}
						
				})
			}
}
	new Rp;
})()
