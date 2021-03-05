let thing = '';

function getResults() {
	$.ajax({
		type:'GET',
		url:'https://smileschool-api.hbtn.info/xml/courses',
		data: {'q': `${thing}`, 'topic': `${$('#topic').val()}`, 'sort': `${$('#sortBy').val()}`},
		datatype:'json',
		success: function(result) {
			let resultList = result.getElementsByTagName('courses')[0].childNodes;
			$('#card-container').empty();
			let str = "videos"
			if (resultList.length == 1) {
				str = "video";
			}
			$('#card-container').append(`<p class="col-12">${resultList.length} ${str}</p>`);
			for (let i = 0; i < resultList.length; i++) {
				let newXML = resultList[i];
				let itemTitle = newXML.getElementsByTagName('title')[0].childNodes[0].data;
				let itemSubTitle = newXML.getElementsByTagName('sub-title')[0].childNodes[0].data;
				let author = newXML.getElementsByTagName('author')[0].childNodes[0].data;
				let thumbUrl = newXML.getElementsByTagName('thumb_url')[0].childNodes[0].data;
				let authorPic = newXML.getElementsByTagName('author_pic_url')[0].childNodes[0].data;
				let itemDuration = newXML.getElementsByTagName('duration')[0].childNodes[0].data;
				let itemTopic = newXML.getElementsByTagName('topic')[0].childNodes[0].data;
				let itemStars = newXML.getAttribute('star');
				let newItem = `<div class="card col-12 col-md-6 offset-md-0 col-lg-3 mx-sm-auto mx-md-auto ml-lg-2 mt-4 course-card"><div class="play-1" style=background-image:url(${thumbUrl})><img class="card-img-top" src="images/play.png" alt="playButton"></div><div class="card-body"><h5 class="card-title font-weight-bold">${itemTitle}</h5><p class="card-text">${itemSubTitle}</p><div class="card-b-1"><img src="${authorPic}" alt="prof_pic" class="car-pr-img rounded-circle"><p class="small">${author}</p></div><div class="card-b-2 d-flex"><div class="stars temp-1"></div><p class="small">${itemDuration}</p></div></div></div>`;
				$('#card-container').append(newItem);
				for (let x = 0; x < itemStars; x++) {
					$('.temp-1').append('<span class="holberton_school-icon-star"></span>');
				}
				for (let x = 5-itemStars; x > 0; x--) {
					$('.temp-1').append('<span class="holberton_school-icon-star-bad"></span>');
				}
				$('.temp-1').removeClass('temp-1');
			}
		}
	});
}
$(document).ready(function() {
	getResults();
});

$(document).ready(function() {
	$('#search-button').change(function() {
		thing = $('#search-button').val();
		getResults();
	});
	$('#topic').change(function() {
		getResults();
	});
	$('#sortBy').change(function() {
		getResults();
	});
});
