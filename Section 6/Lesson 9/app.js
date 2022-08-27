const geocode = require('./geocode')
const forecast = require('./forecast')

geocode('Polban', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
    
    //Untuk Callback Chainning masih belum selesai
    // if (error)
    // {
    //     return console.log(error)
    // }

    // forecast(data.latitude, data.longitude, (error, forecastData) => {
    //     if (error) {
    //     return console.log(error)
    //     }
    //     console.log(data.location)
    //     console.log(forecastData)
    //     })
})