const { error } = require('console')
const { url } = require('inspector')
const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const urlWS = 'http://api.weatherstack.com/current?access_key=4b76536e77465809cc2c00c19bdf026a&query=37.8267,-122.4233'

// request({ url: urlWS, json: true }, (error, response) => {
//     // Catch low level OS errors
//     if (error) {
//         console.log('There is an error with the Weather service')
//     }
//     // Catch input or invalid request errors
//     else if (response.body.error) {
//         console.log('Unable to find location !')
//     }
//     else {
//         const data = response.body.current
//         console.log(data.weather_descriptions[0] + '. It is currently ' + data.temperature + ' degrees out. It feels like '
//             + data.feelslike + ' degrees out.')
//     }
// })



// geocode('Boston', (error, data) => {
//     console.log('Error: ' + error)
//     console.log('Data: ' + JSON.stringify(data))
// })

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast('d', 'D', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})