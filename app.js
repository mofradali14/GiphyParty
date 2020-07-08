console.log("Let's get this party started!");

async function getGIF(q) {
	const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
		params : { q, api_key: 'zM0je5613C3LydAqjDgAvCRkYEjnX3h6' }
	});

	console.log(res);
	renderGIFS(res.data.data);
}

function renderGIFS(GIFs) {
	const arr = [];
	const img = document.createElement('img');
	const div = document.createElement('div');
	const gifs = document.querySelector('.gifs');
	for (let url of GIFs) {
		arr.push(url.images.original.url);
	}
	console.log(arr[Math.floor(Math.random() * (arr.length + 1))]);
	const src = arr[Math.floor(Math.random() * (arr.length + 1))];
	img.setAttribute('src', src);
	div.append(img);

	gifs.prepend(div);

	$('img').on('click', function() {
		$(this).parent().remove();
	});
}

$('form').on('submit', function(e) {
	e.preventDefault();
	const input = document.querySelector('input');
	if (input.value) {
		getGIF(input.value);
		input.value = '';
	} else {
		return;
	}
});

$('#clear').on('click', function(e) {
	$('.row').empty();
});


