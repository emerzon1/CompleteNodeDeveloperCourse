const form = document.querySelector("form");
const input = document.querySelector("#input");
const errorText = document.querySelector(".error");
const locationText = document.querySelector(".location");
const forecastText = document.querySelector(".forecast");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	errorText.textContent = "";
	locationText.textContent = "Loading...";
	forecastText.textContent = "";
	const value = input.value; //location
	fetch(`/weather?address=${encodeURIComponent(value)}`)
		.then((res) => res.json())
		.then((data) => {
			if (data.error) {
				errorText.textContent = data.error;
				locationText.textContent = "";
			} else {
				locationText.textContent = data.location;
                        forecastText.textContent = data.forecast;
			}
		});
});
