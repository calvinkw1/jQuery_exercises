$(document).ready(function() {
	
	$("form").on("keypress", function(e) {
		if ($("input").val().length < 6) {
			$("span").css("visibility", "visible");
		} else {
			$("span").css("visibility", "hidden");
		}
	});

	$("form").on("submit", function(e) {
		if ($("input").val().length === 0) {
			e.preventDefault();
		} else if ($("input").val().length < 6) {
			e.preventDefault();
		} else {
			$("form").fadeOut(2000);
			$("h2").fadeIn(3000);
			e.preventDefault();
		}
	});





});