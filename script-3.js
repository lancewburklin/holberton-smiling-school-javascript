let thing = '';

function getResults() {
	$.ajax({
		type:'GET',
		url:'https://smileschool-api.hbtn.info/courses',
		data: {'q': `${thing}`, 'topic': `${$('#topic').val()}`, 'sort': `${$('#sortBy').val()}`},
		datatype:'json',
		success: function(result) {
			console.log(result);
			$('#card-container').empty();
			let str = "videos"
			if (result.courses.length == 1) {
				str = "video";
			}
			$('#card-container').append(`<p class="col-12">${result.courses.length} ${str}</p>`);
			for (let i = 0; i < result.courses.length; i++) {
				let item = result.courses[i];
				let newItem = `<div class="card col-12 col-md-6 offset-md-0 col-lg-3 mx-sm-auto mx-md-auto ml-lg-2 mt-4 course-card"><div class="play-1" style=background-image:url(${item.thumb_url})><img class="card-img-top" src="images/play.png" alt="playButton"></div><div class="card-body"><h5 class="card-title font-weight-bold">${item.title}</h5><p class="card-text">${item['sub-title']}</p><div class="card-b-1"><img src="${item.author_pic_url}" alt="prof_pic" class="car-pr-img rounded-circle"><p class="small">${item.author}</p></div><div class="card-b-2 d-flex"><div class="stars temp-1"></div><p class="small">${item.duration}</p></div></div></div>`;
				$('#card-container').append(newItem);
				for (let x = 0; x < item.star; x++) {
					$('.temp-1').append('<span class="holberton_school-icon-star"></span>');
				}
				for (let x = 5-item.star; x > 0; x--) {
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
