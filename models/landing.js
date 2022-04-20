const mongoose = require('mongoose');

const objectSchema = {
    name: String,
    id: String,
    nametype: String,
    recclass: String,
    mass: Number,
    fall: String,
    year: String,
    reclat: String,
    reclong: String,
    geolocation: {
        latitude: String,
        longitude: String
    }
}

const landingSchema = mongoose.Schema(objectSchema);

const Landing = mongoose.model('Landing', landingSchema);

module.exports = Landing;

