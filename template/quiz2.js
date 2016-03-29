(function($){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	$mouseover = $(".mouseover");
	$click     = $(".click");
	$submit    = $(".submit");
	$timeout   = $(".timeout");

	$mouseover.on("mouseover", function() {
		$this = $(this);
		$(this).html('Scrooge McDuck!');
		$(this).height($(this).height() + 50);
	});

	$click.on("click", function() {
		$this = $(this);
		$this.html('Peace Out!');
		$this.fadeOut(1500);
		return false;
	});

	$submit.on("submit", function(e) {
		e.preventDefault();
		if ($(this).find('input[type="text"]').val() != '') {
			$(this).find('input[type="text"]').forEach(function() {
				$(this).fadeout('slow');
			});
			$(this).appendwith('<h2>Congratulations! You\'ve entered some text!</h2>');
		}
	});

	$(document).on("ready", function() {
		setTimeout(function(){
			$timeout.fadeOut('slow');
		}, 1000);
	});

})(jQuery);