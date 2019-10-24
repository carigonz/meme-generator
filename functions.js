export function filterBySize(array) {
	return array.filter(meme => meme.width > 500 && meme.height > 500);
}

export function sortAscendent(array) {
	return array.sort((oneMeme, anotherMeme) => oneMeme.id - anotherMeme.id);
}

export function getOrdererProperties(data) {
	const memesArray = data.map(meme => {
		const { id, name, width, height, url } = meme;
		return { id, name, width, height, url };
	});
	return memesArray;
}
