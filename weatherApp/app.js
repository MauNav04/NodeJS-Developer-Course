const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=4b76536e77465809cc2c00c19bdf026a&query=37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    const data = response.body.current
    console.log(data.weather_descriptions[0] + '. It is currently ' + data.temperature + ' degrees out. It feels like '
        + data.feelslike + ' degrees out.')

})