const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://us1.locationiq.com/v1/search?key=pk.b317f674b5de8071ea8d4ac9f124243b&q=' + address + '&format=json'
        request({ url: url, json: true }, (error, response) => {
            if (error)
            {
                callback('Unable to connect to location services!', undefined)
            } 
            else if (response.body.error === "Unable to geocode") 
            {
                callback('Unable to find location. Try another search.',undefined)
            } 
            else 
            {
                callback(undefined, {
                    latitude: response.body[0].lat,
                    longitude: response.body[0].lon,
                    location: response.body[0].display_name
                })
            }
        })
}
module.exports = geocode
