$(document).ready(function() {
	$('.saveBtn').on('click', function() {
		var value = $(this)
			.siblings('.description')
			.val();
		console.log(value);
		var time = $(this)
			.parent()
			.attr('id');
		localStorage.setItem(time, value);
	});

	function hourUpdater() {
		var currentHour = moment().hours();

		$('.time-block').each(function() {
			var blockHour = parseInt(
				$(this)
					.attr('id')
					.split('-')[1]
			);

			if (blockHour < currentHour) {
				$(this).addClass('past');
			} else if (blockHour === currentHour) {
				$(this).removeClass('past');
				$(this).addClass('present');
			} else {
				$(this).removeClass('past');
				$(this).removeClass('present');
				$(this).addClass('future');
			}
		});
	}

	hourUpdater();

	var interval = setInterval(hourUpdater, 15000);

	for (var i = 9; i < 18; i++) {
		$('#hour-' + i + ' .description').val(localStorage.getItem('hour-' + i));
	}

	$('#hour-9 .description').val(localStorage.getItem('hour-9'));
	$('#hour-10 .description').val(localStorage.getItem('hour-10'));
	$('#hour-11 .description').val(localStorage.getItem('hour-11'));
	$('#hour-12 .description').val(localStorage.getItem('hour-12'));
	$('#hour-13 .description').val(localStorage.getItem('hour-13'));
	$('#hour-14 .description').val(localStorage.getItem('hour-14'));
	$('#hour-15 .description').val(localStorage.getItem('hour-15'));
	$('#hour-16 .description').val(localStorage.getItem('hour-16'));
	$('#hour-17 .description').val(localStorage.getItem('hour-17'));

	$('#currentDay').text(moment().format('dddd, MMMM Do'));
});

