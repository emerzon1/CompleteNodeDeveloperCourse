const doWorkPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (Math.random() <= 0.5) {
			resolve([1, 4, 7, 2]); //Success
		} else {
			reject("Number greater than 0.5");
		}
	}, 2000);
});

doWorkPromise
	.then((result) => {
		console.log("Success:", result);
	})
	.catch((error) => {
		console.log("Error:", error);
	});
