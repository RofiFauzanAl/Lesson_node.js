const request = require('request')
const url ='https://jsonplaceholder.typicode.com/todos'
request({ url: url, json: true }, (error, response) => {
    console.log(response.body[0].userId + ' User ID ' +
response.body[0].title + ' Title ' + 
response.body[0].completed + ' Status ')
})