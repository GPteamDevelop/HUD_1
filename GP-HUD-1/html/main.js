
var rgbStart = [139, 195, 74]
var rgbEnd = [183, 28, 28]

$(function () {
	window.addEventListener('message', function (event) {

		if (event.data.action == "updateStatus") {
			updateStatus(event.data.status);
		}
		else if (event.data.action == "updateStatusHud"){
			if (event.data.armor > 0) {
				$('#armourid .vert-stathunger').fadeIn(400);
				updatearmor(event.data.armor);
			} else {
				$('#armourid .vert-stathunger').fadeOut(400);
			}
		}
		else if (event.data.action == "setPasy"){
			changePasyHeart(event.data.value, event.data.amount)
		} else if (event.data.action == "toggle") {
			if (event.data.show) {
				$('#ui').show();
			} else {
				$('#ui').hide();
			}
		}
	});

});


function updatearmor(armor){
	$("#armour .bg").css("height", armor + "%");
}
function updateWeight(weight) {


	var bgcolor = colourGradient(weight / 100, rgbEnd, rgbStart)
	$('#weight .bg').css('height', weight + '%')
	$('#weight .bg').css('background-color', 'rgb(' + bgcolor[0] + ',' + bgcolor[1] + ',' + bgcolor[2] + ')')
} 

function updateStatus(status) {
	var hunger = status[0]
	var thirst = status[1]
	var drunk = status[2]
	$('#hunger .bg').css('height', hunger.percent + '%')
	$('#water .bg').css('height', thirst.percent + '%')
	$('#drunk .bg').css('height', drunk.percent + '%');
	if (drunk.percent > 0) {
		$('#drunk').show();
	} else {
		$('#drunk').show();
	}

}

//API Shit
function colourGradient(p, rgb_beginning, rgb_end) {
	var w = p * 2 - 1;

	var w1 = (w + 1) / 2.0;
	var w2 = 1 - w1;

	var rgb = [parseInt(rgb_beginning[0] * w1 + rgb_end[0] * w2),
	parseInt(rgb_beginning[1] * w1 + rgb_end[1] * w2),
	parseInt(rgb_beginning[2] * w1 + rgb_end[2] * w2)];
	return rgb;
};

//PASY
function changePasyHeart(value, amount){
	if(value == 'heart'){
		var healthPercent = amount-100;

		$('#pasy .bg').css('height', healthPercent+'%')
	}else if(value == 'pasy'){
		if(amount){
			$('#pasy .bg').css('height', 100+'%')
		}else{
			$('#pasy .bg').css('height', 0+'%')
		}
	}
}

function setPasy(value){
	if (value){
		//#64B5F6
		percentpp = 100
		$('#pasy .bg').css('height', percentpp+'%')
	}else{
		//#81C784
		percentpp = 0
		$('#pasy .bg').css('height', percentpp+'%')
	}

}