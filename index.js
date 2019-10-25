import getMemes from './api.js';
import { ENDPOINT } from './api.js';
import {
	sortAscendent,
	filterBySize,
	getOrdererProperties
} from './functions.js';

let memesArray = [];
let meme = [];

getMemes(ENDPOINT)
	.then(getProperties)
	.then(getFormated)
	.then(memes => {
		memesArray = memes.slice();
		meme = getMemeOfTheDay(memesArray);
		console.log(memesArray);
		img.src = meme.url;
	})
	.then(console.dir)
	.catch(error => console.log(error.message));

function getProperties(fetchedData) {
	const data = fetchedData.data.memes;
	return getOrdererProperties(data);
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

const title = document.querySelector('h1');
const button = document.querySelector('.btn-get-random-meme');
const img = document.querySelector('.meme-img');
button.addEventListener('click', () => {
	title.innerText = 'Random Meme';
	button.innerText = 'Get another random meme!';
	meme = getRandomMeme(memesArray);
	img.src = meme.url;
});
