$ (function (){
	$(".blogs").slice(0, 2).show();
	$("#loadMore").on('click', function(e) {
		e.preventDefault();
		$(".blogs:hidden").slice(0, 1).slideDown();
	})
})