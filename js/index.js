ajax({
	url:"/api/get_home",
	type:"get",
	success:function(data){
		if(data){
			//轮播图部分的数据
			var ad=data.ad;
			var adStr='';
			var poStr='';
			for(var i=0;i<ad.length;i++){
				//console.log(ad[i].ad_code);
				adStr += '<div class="item"><a href="'+ad.ad_link+'"><img src="'+ad.ad_code+'" alt="" /></a></div>';
				poStr += '<li></li>';
			};
			$('.swipe-wrap').html(adStr);
			$('#position').html(poStr);
			$('#position li').eq(0).addClass('cur');
			
			
			//服务类部分
			
			var category=data.category;
			var categoryStr='';
			for(var j=0;j<category.length;j++){
				categoryStr += '<li class="maintenance-item" id="'+category[j].id+'"><a href="NewMachineRec.html"><img src="images/5.png" alt="" /><span>'+category[j].mobile_name+'</span></a></li>'
			}
			$('.maintenance-content').html(categoryStr);
		};
	}
});