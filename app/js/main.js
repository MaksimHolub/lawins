$(function () {

	$('.specialist-avatars__top-item').on('click', function (e) {
		e.preventDefault();
		$('.specialist-avatars__top-item').removeClass('specialist-avatars__top-item--active');
		$(this).addClass('specialist-avatars__top-item--active');
		$('.specialist-avatars__content-item').removeClass('specialist-avatars__content-item--active');
		$($(this).attr('href')).addClass('specialist-avatars__content-item--active');

	})

		$('.support-content__details').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('support-content__details--open');

	})


});