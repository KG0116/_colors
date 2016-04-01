$('#colorpicker').farbtastic(function(color){

	color = ntc.name(color);
	$("body").css("background-color", color[0]);
	var stringColor =  color
	//color = slug(color, {lowercase: true});
	$('input').val(color);
	$('p').text(stringColor);
});
var color = $("input").val();
