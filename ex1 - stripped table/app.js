$(document).ready(function() {
	

	$("form").on("submit", function(e) {
		if ($("input[type=text]").val().length === 0) {
			e.preventDefault();
		} else {
			$("tbody tr:even").css("background-color", $("#changeColor").val());
			e.preventDefault();
		}
		console.log(e);
	});





});