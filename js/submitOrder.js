
//弹框
$(function ($) {
	//弹出联系人
	$(".nameBtn").on('click', function () {
		console.log('111')
//		$(".nameBomb").prop("display","block");
		$("#shade1").fadeIn("slow");
		$(".nameShade").fadeIn("slow");
		$(".nameBomb").fadeIn("slow");
	});
	
	//确认联系人
	$("#shade1 .confirm").on('click', function () {
		console.log('222')
		$("#shade1").fadeOut("slow");
		$(".nameShade").fadeOut("slow");
		$(".nameBomb").fadeOut("slow");
	});
	
	//取消联系人
	$("#shade1 .cancel").on('click', function () {
		console.log('222')
		$("#shade1").fadeOut("slow");
		$(".nameShade").fadeOut("slow");
		$(".nameBomb").fadeOut("slow");
	});
	
	
	
	//弹出验证码
	$(".phoneBtn").on('click', function () {
		console.log('333')
//		$(".nameBomb").prop("display","block");
		$("#shade2").fadeIn();
		$(".phoneShade").fadeIn("slow");
		$(".phoneBomb").fadeIn("slow");
	});
	
	    //确认联系人
	$("#shade2 .confirm").on('click', function () {
		console.log('444')
		$("#shade1").fadeOut("slow");
		$(".phoneShade").fadeOut("slow");
		$(".phoneBomb").fadeOut("slow");
	});
	
	    //取消联系人
	$("#shade2 .cancel").on('click', function () {
		console.log('555')
		$("#shade2").fadeOut("slow");
		$(".phoneShade").fadeOut("slow");
		$(".phoneBomb").fadeOut("slow");
	});
	
	 //发送验证码
	$("#shade2 .veritifica").on('click', function () {
		console.log('66')
		
		$("#shade2 .v1").css("display","none");
		$("#shade2 .v2").css("display","block");		
		resetCode();	
	});
	
	//倒计时
	function resetCode(){		
		$('#shade2 i').html();
		$('#shade2 i').html('15');
		$('#shade2 i').show();	
		var timer = null;
		clearInterval(timer);
		var second = 15;
		timer = setInterval(function(){
			second -= 1;
			if(second >0 ){
				$('#shade2 i').html(second);
			}else{
				clearInterval(timer);
				$('#shade2 .v1').css("display","block");
				$('#shade2 .v2').css("display","none");
			}
		},1000);
	}
	
	
//	优惠码
	$(".coupan-code").on('click', function () {
		console.log('66')
		$(".coupan-code #coupan-code-txt").css("display","block");
	});
	
	
	
});





