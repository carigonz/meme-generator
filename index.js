import getMemes from './api';

function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

fetch('https://api.imgflip.com/get_memes')
	.then(handleErrors)
	.then(response => {
		response.status === 200
			? console.log('Successful request!')
			: console.log(`Oops, we get a ${response.status} error"`);
		return response.json();
	})
	.then(promise => {
		const data = promise.data.memes;
		const pepe = data.map(meme => {
			const { id, name, width, height, url } = meme;
			return { id, name, width, height, url };
		});
		const memes = pepe
			.filter(meme => meme.width < 500 && meme.height < 500)
			.sort((meme, meme2) => meme.id - meme2.id);
		console.log(pepe);
		console.table(memes);
	});

// 	Vamos a separar el código en 2 archivos, api.js y index.js. Usar ES6 Modules para exportar e importar entre ambos.

// api.js va a contener el código necesario para realizar el request a la API y retornar el array de memes original, sin modificaciones.
// este código irá dentro de la función getMemes(URL), que recibe la url como parámetro
// guardar el endpoint de la API en una constante global ENDPOINT
// index.js va a importar la función getMemes() de api.js, invocarla y hacer todo el procesamiento posterior que hicimos en la parte 1
// modularizar los diferentes procesamientos que hacemos en los callbacks en funciones y usarlas. Ver abajo cómo debería quedar
// do1()
//   .then(do2())
//   .then(do3());
