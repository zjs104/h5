$('.orders-btn').on('click',function(){
	console.log($(".orders-pro-describe").val());
	ajax({
		type:"post",
		url:"/api/post_sub",
		async:true,
		dataType:'jsonp',
		jsonp:'callback',
		data:{
			name:$('.orders-name').val(),
			mobile:$('.orders-phone').val(),
			problem:$('.orders-problem').val(),
			describe:$(".orders-pro-describe").val()
		},
		success:function(msg){
//			202     请完善表单
//			202     手机号码格式有误
//			200     创建成功
//			503     创建失败
//			if(msg==202){
//				
//			}else if(msg==202){
//				
//			}else if(msg==200){
//				
//			}else if(msg==503){
//				
//			}
			console.log(msg);
		}
	});
})
