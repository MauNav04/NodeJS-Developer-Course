const { error } = require('console')
const { url } = require('inspector')
const request = require('request')

const urlWS = 'http://api.weatherstack.com/current?access_key=4b76536e77465809cc2c00c19bdf026a&query=37.8267,-122.4233'
const urlMapBox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWF1bmF2YXJyIiwiYSI6ImNsazUwY3lvaDBmN3kzZHBlMHVjc2YxejMifQ.bsHD_DxvujtJ6vUbj3BRUA&limit=1'

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

request({ url: urlMapBox, json: true }, (error, response) => {
    // Catch low level OS errors
    if (error) {
        console.log('There is an error with the Weather Server')
    }
    // Catch input or invalid request errors
    else if (response.body.features.length === 0) {
        console.log('Unable to fetch info for the location !')
    } else {
        const data = response.body.features[0].center
        console.log('Latitude: ' + data[1])
        console.log('Longitude:' + data[0])
    }
})