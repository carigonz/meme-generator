export function getMemes(url) {
	return fetch(url)
		.then(response => {
			if (response.ok) {
				console.log('Successful request!');
			} else {
				console.log(`Oops, we get a ${response.status} error`);
			}
			return response;
		})
		.then(data => data.json())
		.catch(error => console.log(error.message));
}
