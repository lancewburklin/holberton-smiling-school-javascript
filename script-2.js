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
$(document).ready(function() {
	homepageQuotes();
})
