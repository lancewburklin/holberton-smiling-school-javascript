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
$(document).ready(function() {
	homepageQuotes();
})
