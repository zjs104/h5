var domain='http://www.3c885.com';
function ajax(json){
	$.ajax({
		url:domain+json.url,
		type:json.type,
		data:json.data,
		dataType:json.dataType,
		jsonp:this.jsonp,
		jsonpCallback:json.jsonpCallback,
		success:json.success,
		error:function(){
			console.log('failed');
		}
	})
};
