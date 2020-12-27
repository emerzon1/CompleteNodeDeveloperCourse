require("dotenv").config();
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

if (process.argv.length >= 3) {
    geocode(process.argv[2], (err, { latitude, longitude, location } = {}) => {
        if (err) {
            return console.log(err);
        }
        forecast(latitude, longitude, (error, data) => {
            if (error) {
                console.log("Error:", error);
                return;
            }
            console.log(location);
            console.log("Data:", data);
        });
    });
}
else {
    console.log("Please provide a location");
}