require("dotenv").config();
const request = require("request");

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_ACCESS_KEY}&query=${lat},${long}&units=f`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather service", undefined);
        } else if (body.error) {
            callback(
                "Unable to find location.  Try another search.",
                undefined
            );
        } else {
            const {current} = body;
            //console.log(current);
            callback(
                undefined,
                `${current.weather_descriptions[0]}. It is currently ${
                    current.temperature
                }° F. There is a ${
                    current.precip * 100
                }% chance of rain. It feels like ${current.feelslike}° F.`
            );
        }
    });
};

module.exports = forecast;
