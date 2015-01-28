$(document).ready(function() {
	
	$("form").on("submit", function(e) {
		if ($("input").val().length === 0) {
			e.preventDefault();
		} else {
			$("ol").append("<li><input type=checkbox><span>" + $("#toDoEntry").val() + "</span> <button> X </button> </li>");
			e.preventDefault();
		}
		$("#toDoEntry").val("");



	});

	$("ol").on("click", "input[type=checkbox]",function(e) {
		$(this).next().toggleClass("completed");	
	});

	$("ol").on("click", "button", function(e) {
		$(this).parent().remove();
		console.log(this);
	});



});