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

// function renderGIFS(GIFs) {
// 	const arr = [];
// 	const newLi = document.createElement('LI');
// 	const img = document.createElement('img');
// 	const ul = document.querySelector('ul');
// 	const remove = document.createElement('button');
// 	const div = document.createElement('div');
// 	const row = document.querySelector('.row');
// 	div.className = 'col-sm';
// 	for (let url of GIFs) {
// 		arr.push(url.images.original.url);
// 	}
// 	console.log(arr[Math.floor(Math.random() * (arr.length + 1))]);
// 	const src = arr[Math.floor(Math.random() * (arr.length + 1))];
// 	img.setAttribute('src', src);
// 	div.append(img);
// 	remove.setAttribute('class', 'delete btn btn-danger');
// 	remove.innerText = 'Remove';

// 	remove.setAttribute('class', 'delete btn btn-danger');
// 	remove.innerText = 'Remove';
// 	div.append(remove);
// 	row.append(div);

// 	$('img').on('click', function() {
// 		$(this).parent().remove();
// 	});
// }

// function renderGIFS(GIFs) {
// 	const arr = [];
// 	const newLi = document.createElement('LI');
// 	const img = document.createElement('img');
// 	const ul = document.querySelector('ul');
// 	const remove = document.createElement('button');
// 	const span = document.createElement('span');
// 	for (let url of GIFs) {
// 		arr.push(url.images.original.url);
// 	}
// 	console.log(arr[Math.floor(Math.random() * (arr.length + 1))]);
// 	const src = arr[Math.floor(Math.random() * (arr.length + 1))];
// 	img.setAttribute('src', src);
// 	span.append(img);
// 	remove.setAttribute('class', 'delete btn btn-danger');
// 	remove.innerText = 'Remove';

// 	span.append(remove);
// 	newLi.append(span);
// 	remove.setAttribute('class', 'delete btn btn-danger');
// 	remove.innerText = 'Remove';

// 	newLi.append(remove);
// 	ul.prepend(newLi);
// 	$('.delete').on('click', function() {
// 		$(this).parent().remove();
// 	});
// }
