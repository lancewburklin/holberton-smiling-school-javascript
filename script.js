function homepageQuotes() {
	$.ajax({
		type:'GET',
		url:'https://smileschool-api.hbtn.info/quotes',
		dataType: 'json',
		success: function(result) {
			$('.quoteLoad').remove();
			for (let i = 0; i < result.length; i++) {
				$(".carQuote").append(`<div class="carousel-item"><div class="d-flex flex-wrap justify-content-center"><img class="rounded-circle car-img" src="${result[i].pic_url}" alt="Slide One"><div class="d-flex justify-content-center flex-column car-info"><p>${result[i].text}</p><p class="font-weight-bold">${result[i].name}</p><p class="font-italic">${result[i].title}</p></div></div></div>`);
			}
			$('.carousel-item').first().addClass('active');
		}
	});
}

(function($) {
	$(function() {
		var jcarousel = $('.jcarousel');

		jcarousel
		.on('jcarousel:reload jcarousel:create', function () {
			var carousel = $(this),
			width = carousel.innerWidth();

			if (width >= 992) {
				width = width / 4;
			} else if (width >= 768) {
				width = width / 2;
			} else if (width >= 350) {
				width = width / 1;
			}

			carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
		})
		.jcarousel({
			wrap: 'circular'
		});

		$('.jcarousel-control-prev')
		.jcarouselControl({
			target: '-=1'
		});

		$('.jcarousel-control-next')
		.jcarouselControl({
			target: '+=1'
		});

		$('.jcarousel-pagination')
		.on('jcarouselpagination:active', 'a', function() {
			$(this).addClass('active');
		})
		.on('jcarouselpagination:inactive', 'a', function() {
			$(this).removeClass('active');
		})
		.on('click', function(e) {
			e.preventDefault();
		})
		.jcarouselPagination({
			perPage: 1,
			item: function(page) {
				return '<a href="#' + page + '">' + page + '</a>';
			}
		});
	});
})(jQuery);

function popularTutorials() {
	$.ajax({
		type:'GET',
		url:'https://smileschool-api.hbtn.info/popular-tutorials',
		dataType: 'json',
		success: function(result) {
			console.log(result);
			for (let i = 0; i < result.length; i++) {
				let item = result[i];
				let newItem = $(`<li><div class="card"><div class="play-1" style="background-image:url(${item.thumb_url})"><img class="card-img-top" src="images/play.png" alt="playButton"></div><div class="card-body"><h5 class="card-title font-weight-bold">${item.title}</h5><p class="card-text">${item['sub-title']}</p><div class="card-b-1"><img src="${item.author_pic_url}" alt="prof_pic" class="car-pr-img rounded-circle"><p class="small">${item.author}</p></div><div class="card-b-2 d-flex"><div class="stars temp-1"></div><p class="small">${item.duration}</p></div></div></div></li>`);
				$('.carouselList').append(newItem);
				$('.jcarousel').jcarousel('reload');
				for (let x = 0; x < item.star; x++) {
					$('.temp-1').append('<span class="holberton_school-icon-star"></span>');
				}
				for (let x = 5-item.star; x > 0; x--) {
					$('.temp-1').append('<span class="holberton_school-icon-star-bad"></span>');
				}
				$('.temp-1').removeClass('temp-1');
				$('.jcarousel').jcarousel('reload');
			}
		}
	});
}

function latestVideos() {
	$.ajax({
		type:'GET',
		url:'https://smileschool-api.hbtn.info/latest-videos',
		dataType: 'json',
		success: function(result) {
			console.log(result);
			for (let i = 0; i < result.length; i++) {
				let item = result[i];
				let newItem = $(`<li><div class="card"><div class="play-1" style="background-image:url(${item.thumb_url})"><img class="card-img-top" src="images/play.png" alt="playButton"></div><div class="card-body"><h5 class="card-title font-weight-bold">${item.title}</h5><p class="card-text">${item['sub-title']}</p><div class="card-b-1"><img src="${item.author_pic_url}" alt="prof_pic" class="car-pr-img rounded-circle"><p class="small">${item.author}</p></div><div class="card-b-2 d-flex"><div class="stars temp-1"></div><p class="small">${item.duration}</p></div></div></div></li>`);
				$('.carouselList-2').append(newItem);
				$('.jcarousel').jcarousel('reload');
				for (let x = 0; x < item.star; x++) {
					$('.temp-1').append('<span class="holberton_school-icon-star"></span>');
				}
				for (let x = 5-item.star; x > 0; x--) {
					$('.temp-1').append('<span class="holberton_school-icon-star-bad"></span>');
				}
				$('.temp-1').removeClass('temp-1');
				$('.jcarousel').jcarousel('reload');
			}
		}
	});
}

$(document).ready(function() {
	homepageQuotes();
	popularTutorials();
	latestVideos();
})
