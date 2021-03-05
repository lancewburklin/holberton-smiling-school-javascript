function homepageQuotes() {
	$.ajax({
		type:'GET',
		url:'https://smileschool-api.hbtn.info/xml/quotes',
		dataType: 'xml',
		success: function(result) {
			$('.quoteLoad').remove();
			for (let i = 1; ; i++) {
				let newXML = result.getElementById(i);
				if (newXML == null)
					break;
				let picUrl = newXML.getElementsByTagName('pic_url')[0].childNodes[0].data;
				let itemTitle = newXML.getElementsByTagName('title')[0].childNodes[0].data;
				let itemName = newXML.getElementsByTagName('name')[0].childNodes[0].data;
				let itemText = newXML.getElementsByTagName('text')[0].childNodes[0].data;
				$(".carQuote").append(`<div class="carousel-item"><div class="d-flex flex-wrap justify-content-center"><img class="rounded-circle car-img" src="${picUrl}" alt="Slide One"><div class="d-flex justify-content-center flex-column car-info"><p>${itemText}</p><p class="font-weight-bold">${itemName}</p><p class="font-italic">${itemTitle}</p></div></div></div>`);
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
		url:'https://smileschool-api.hbtn.info/xml/popular-tutorials',
		dataType: 'xml',
		success: function(result) {
			for (let i = 1; ; i++) {
				let newXML = result.getElementById(i);
				if (newXML == null)
					break;
				let itemTitle = newXML.getElementsByTagName('title')[0].childNodes[0].data;
				let itemSubTitle = newXML.getElementsByTagName('sub-title')[0].childNodes[0].data;
				let author = newXML.getElementsByTagName('author')[0].childNodes[0].data;
				let thumbUrl = newXML.getElementsByTagName('thumb_url')[0].childNodes[0].data;
				let authorPic = newXML.getElementsByTagName('author_pic_url')[0].childNodes[0].data;
				let itemDuration = newXML.getElementsByTagName('duration')[0].childNodes[0].data;
				let itemTopic = newXML.getElementsByTagName('topic')[0].childNodes[0].data;
				let itemStars = newXML.getAttribute('star');
				let newItem = $(`<li><div class="card"><div class="play-1" style="background-image:url(${thumbUrl})"><img class="card-img-top" src="images/play.png" alt="playButton"></div><div class="card-body"><h5 class="card-title font-weight-bold">${itemTitle}</h5><p class="card-text">${itemSubTitle}</p><div class="card-b-1"><img src="${authorPic}" alt="prof_pic" class="car-pr-img rounded-circle"><p class="small">${author}</p></div><div class="card-b-2 d-flex"><div class="stars temp-1"></div><p class="small">${itemDuration}</p></div></div></div></li>`);
				$('.carouselList').append(newItem);
				$('.jcarousel').jcarousel('reload');
				for (let x = 0; x < itemStars; x++) {
					$('.temp-1').append('<span class="holberton_school-icon-star"></span>');
				}
				for (let x = 5-itemStars; x > 0; x--) {
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
		url:'https://smileschool-api.hbtn.info/xml/latest-videos',
		dataType: 'xml',
		success: function(result) {
			for (let i = 1; ; i++) {
				let newXML = result.getElementById(i);
				if (newXML == null)
					break;
				let itemTitle = newXML.getElementsByTagName('title')[0].childNodes[0].data;
				let itemSubTitle = newXML.getElementsByTagName('sub-title')[0].childNodes[0].data;
				let author = newXML.getElementsByTagName('author')[0].childNodes[0].data;
				let thumbUrl = newXML.getElementsByTagName('thumb_url')[0].childNodes[0].data;
				let authorPic = newXML.getElementsByTagName('author_pic_url')[0].childNodes[0].data;
				let itemDuration = newXML.getElementsByTagName('duration')[0].childNodes[0].data;
				let itemTopic = newXML.getElementsByTagName('topic')[0].childNodes[0].data;
				let itemStars = newXML.getAttribute('star');
				let newItem = $(`<li><div class="card"><div class="play-1" style="background-image:url(${thumbUrl})"><img class="card-img-top" src="images/play.png" alt="playButton"></div><div class="card-body"><h5 class="card-title font-weight-bold">${itemTitle}</h5><p class="card-text">${itemSubTitle}</p><div class="card-b-1"><img src="${authorPic}" alt="prof_pic" class="car-pr-img rounded-circle"><p class="small">${author}</p></div><div class="card-b-2 d-flex"><div class="stars temp-1"></div><p class="small">${itemDuration}</p></div></div></div></li>`);
				$('.carouselList-2').append(newItem);
				$('.jcarousel').jcarousel('reload');
				for (let x = 0; x < itemStars; x++) {
					$('.temp-1').append('<span class="holberton_school-icon-star"></span>');
				}
				for (let x = 5-itemStars; x > 0; x--) {
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
