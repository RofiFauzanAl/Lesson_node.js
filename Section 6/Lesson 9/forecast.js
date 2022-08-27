const request = require('request')

const forecast = (address, callback) => {
    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+ address +'?unitGroup=metric&include=current&key=SSXC7DMYLZE9CJNBNE4DKAUET&contentType=json'
    request({url: url, json: true}, (error, response) => {
        // console.log(response.body.days[0].condition + ' It is currently ' +
        //     response.body.currentConditions.temp + ' degrees out.')
        if (error)
            {
                callback('Unable to connect to location services!', undefined)
            }  
            else 
            {
                callback(undefined, {
                    temp: response.body.currentConditions.temp,
                    longitude: response.body.currentConditions.conditions
                })
            }
    })
}

module.exports = forecast