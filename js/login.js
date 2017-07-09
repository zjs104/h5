var flag=true;
var time=5;
var sendTimer;
function sendMsg(){
	$('.login-sendMsg').html(time);
	time--;
	sendTimer=setTimeout(sendMsg,1000);
	if(time<-1){
		clearTimeout(sendTimer);
		$('.login-sendMsg').html('验证码');
		time=5;
		flag=true;
	}
}
$('.login-sendMsg').on('click',function(){
	if(flag){
		flag=false;
		sendTimer=setTimeout(sendMsg,1000);
		$.ajax({
			type:"post",
			url:"",
			async:true,
			data:{
				mobile:$('.login-phone').val()
			},
			success:function(msg){
//				200 短信验证码已发送成功，请注意查收短信
//				202 手机号码格式有误
//				503 短信验证码发送失败，请联系客服
				if(msg==200){
					alert('短信验证码已发送成功，请注意查收短信');
				}else if(msg==202){
					alert(' 手机号码格式有误');
				}else if(msg==503){
					alert('短信验证码发送失败，请联系客服');
				};
				
			},
			error:function(){
				console.log('failed');
			}
		});
	};
	
});
$('.login-btn').on('click',function(){
	$.ajax({
		type:"post",
		url:"",
		async:true,
		data:{
			mobile:$('.login-phone').val(),
			code:$('.login-vdcode').val()
		},
		success:function(msg){
//			202 请完善表单
//			202 验证码不正确
//			503 账号注册失败，请联系管理员
//			200 登录成功
			if(msg==202){
				
			}else if(msg==201){
				
			}else if(msg==503){
				
			}else if(msg==200){
				
			}
		},
		error:function(){
			
		}
	});
});
