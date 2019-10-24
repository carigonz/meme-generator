import { getMemes } from './api.js';
import {
	sortAscendent,
	filterBySize,
	getOrdererProperties
} from './functions.js';

const ENDPOINT = getMemes('https://api.imgflip.com/get_memes');
//console.log(ENDPOINT);

const hola = ENDPOINT.then(originalFetchedData =>
	getProperties(originalFetchedData)
)
	.then(memesArray => {
		const pepe = getFormated(memesArray);
		console.table(pepe);
		return pepe;
	})
	.catch(error => console.log(error.message));

function getProperties(fetchedData) {
	const data = fetchedData.data.memes;
	const memesArray = getOrdererProperties(data);
	return memesArray;
}

function getFormated(array) {
	const test = filterBySize(array);
	return sortAscendent(test);
}

function getRandomMeme(memeArray) {
	return memeArray[Math.floor(Math.random() * memeArray.length)];
}

function getMemeOfTheDay(memeArray) {
	const date = new Date();
	return memeArray[date.getDate()];
}
