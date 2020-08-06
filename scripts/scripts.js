jQuery(function () {


	$('.next').click(function(){
		$('.mounth_number').removeClass('_active');
		var year_item = $('.year_item:first-child').clone();
		var title = $('.year_item:first-child').children('.number_of_year').text();
		var title_2 = +title;
		$('.middle_part').append(year_item);
		$('.middle_part>.year_item:last-child').children('.number_of_year').text(title_2+2);
		$('.middle_part>.year_item:first-child').remove();

		
		
	});
	$('.prev').click(function(){
		$('.mounth_number').removeClass('_active');
		var year_item = $('.year_item:last-child').clone();
		var title = $('.year_item:last-child').children('.number_of_year').text();
		var title_2 = +title;
		$('.middle_part').prepend(year_item);
		$('.middle_part>.year_item:first-child').children('.number_of_year').text(title_2-2);
		$('.middle_part>.year_item:last-child').remove();
	});



	$('.cancel_btn').click(function(){
		$('.mounth_number').removeClass('_active');
		$('.result_part').text('');
	});
	$('body').on('click',' .mounth_number', function(){

		var current_year = $(this).parent().parent().siblings('.number_of_year').text(),
			current_mounth = $(this).children().text();

		$('.result_part').text(current_mounth + ' ' + current_year);
		$('.mounth_number').removeClass('_active');




		$(this).addClass('_active');
	});
});


