
$('.complaint-btn').on('click',function(){
	$.ajax({
		type:"post",
		url:"",
		async:true,
		data:{
			content:$('.complaint-content').val()
		},
		success:function(mes){
	//		401 请登录
	//		202 请完善表单信息
	//		200 提交成功
	//		503 提交失败
			if(mes==401){
				window.location.href="login.html";
			}else if(mes==202){
				alert('请完善表格信息')
			}else if(mes==200){
				
			}else if(mes==503){
				
			}
		},
		error:function(){
			console.log('failed')
		}
	});
})

