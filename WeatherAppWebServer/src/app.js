const path = require("path");
const express = require("express");
const hbs = require('hbs'); 
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const { request } = require("https");
const app = express();
//Define express config paths
const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to use
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
    res.render("index", {
        title: "Weather",
        name: "Evan Merzon"
    });
});

app.get("/about", (req, res) => {
    res.render('about', {
        title: "About",
        name: "Evan Merzon"
    });
});

app.get("/help", (req, res) => {
    res.render('help', {
        title: "Help",
        message: "Welcome to my weather app.",
        name: "Evan Merzon"
    });
});

app.get("/weather", (req, res) => {
    if(!req.query.address){
        return res.send({
            error: "You must provide an address"
        })
    }
    geocode(req.query.address, (err, { latitude, longitude, location } = {}) => {
        if (err) {
            return res.send({error: err});
        }
        forecast(latitude, longitude, (error, data) => {
            if (error) {
                return res.send({error});
            }
            res.send({
                forecast: data,
                location,
                address: req.query.address
            });
        });
    });
});



app.get("/help/*", (req, res) => {
    res.render('404', {
        title: "404",
        error: "Help article not found",
        name: "Evan Merzon"
    });
});

app.get("*", (req, res) => {
    res.render('404', {
        title: "404",
        error: "Page not found",
        name: "Evan Merzon"
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port", PORT);
});
