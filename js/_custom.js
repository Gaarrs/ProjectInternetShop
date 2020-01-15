document.addEventListener("DOMContentLoaded", function() {
	// Реализация опциональных областей на Jquery

	$( '.checkbox-input-men').click (function(){
		if ($( '.men-items').hasClass('hidden')) {
			$( '.men-items').removeClass('hidden');
			$( '.men-items').addClass('visible');
		} else {
			$( '.men-items').removeClass('visible');
			$( '.men-items').addClass('hidden');
		}
	});

	$( '.checkbox-input-women').click (function(){
		if ($( '.women-items').hasClass('hidden')) {
			$( '.women-items').removeClass('hidden');
			$( '.women-items').addClass('visible');
		} else {
			$( '.women-items').removeClass('visible');
			$( '.women-items').addClass('hidden');
		}
	});

	$( '.checkbox-input-children').click (function(){
		if ($( '.children-items').hasClass('hidden')) {
			$( '.children-items').removeClass('hidden');
			$( '.children-items').addClass('visible');
		} else {
			$( '.children-items').removeClass('visible');
			$( '.children-items').addClass('hidden');
		}
	});

	// Реализация переключения строк каталога на Jquery

	$('.right-arrow-men').click (function(){
		let current = $('.men-page').text(),
			page = parseInt(current, 10);
		if (page < 5) {
			page += 1;
		}		
		$('.men-page').text(page);
	});

	$('.left-arrow-men').click (function(){
		let current = $('.men-page').text(),
			page = parseInt(current, 10);
		if (page > 1) {
			page -= 1;
		}		
		$('.men-page').text(page);
	});


	$('.right-arrow-women').click (function(){
		let current = $('.women-page').text(),
			page = parseInt(current, 10);
		if (page < 5) {
			page += 1;
		}		
		$('.women-page').text(page);
	});

	$('.left-arrow-women').click (function(){
		let current = $('.women-page').text(),
			page = parseInt(current, 10);
		if (page > 1) {
			page -= 1;
		}		
		$('.women-page').text(page);
	});


	$('.right-arrow-children').click (function(){
		let current = $('.children-page').text(),
			page = parseInt(current, 10);
		if (page < 5) {
			page += 1;
		}		
		$('.children-page').text(page);
	});

	$('.left-arrow-children').click (function(){
		let current = $('.children-page').text(),
			page = parseInt(current, 10);
		if (page > 1) {
			page -= 1;
		}		
		$('.children-page').text(page);
	});





	

	// Реализация опциональных областей на нативном JS
	//let checkbox = document.querySelector('.checkbox-input-men'),
	//	menShop = document.querySelector('.men-items');
	//
	//checkbox.addEventListener('click', function(){
	//	if (menShop.classList.contains('hidden')) {
	//		menShop.classList.remove('hidden');
	//		menShop.classList.add('visible');
	//	} else {
	//		menShop.classList.remove('visible');
	//		menShop.classList.add('hidden');
	//	}
	//});

});
