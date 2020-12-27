const doWorkCallback = (callback) => {
	setTimeout(() => {
		if (Math.random() <= 0.5) {
			callback(undefined, [1, 4, 7, 2]);
		} else {
			callback("Error!", undefined);
		}
	}, 2000);
};

doWorkCallback((error, result) => {
	if (error) {
		return console.log(error);
	}
	console.log(result);
});
