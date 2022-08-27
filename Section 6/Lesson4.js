const request = require('request')
const url = 'https://jsonplaceholder.typicode.com/todos'
request({ url: url }, (error, response) => {
 // Parse the response body from JSON string into JavaScript object
    const data = JSON.parse(response.body)
 // Will print the current temperature to the console
    console.log(data[0].userId, data[1].id)
})