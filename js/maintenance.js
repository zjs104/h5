console.log($('.appoint-service'));
$('.appoint-service').on('click',function(){
	console.log(123);
	$(this).addClass("appoint-serviced")
});
$('.maintenance-type-item').on('click',function(){
	$('.maintenance-type-item').removeClass('maintenance-type-on');
	$(this).addClass('maintenance-type-on');
});