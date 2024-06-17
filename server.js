const express = require('express')

const app = express()

const PORT = 3000;

const API = {
    
    "data": [{
      "type": "articles",
      "id": "1",
      "attributes": {
        "title": "Milind krishna",
        "body": "The shortest article. Ever.",
        "created": "2015-05-22T14:56:29.000Z",
        "updated": "2015-05-22T14:56:28.000Z"
      },
      "relationships": {
        "author": {
          "data": {"id": "42", "type": "people"}
        }
      }
    }],
    "included": [
      {
        "type": "people",
        "id": "42",
        "attributes": {
          "name": "Soumili",
          "age": 25,
          "gender": "female"
        }
      }
    ]
  }

app.get('/', (req,res) => {
    res.send('<h1>Hello, Express.js Server!</h1>')
})

app.get('/milind',(req,res) => {
    res.send('<h1>Hello, Express.js Server is calling Milind!</h1>')
})

app.get('/soumili',(req,res) => {
    res.json(API)
})

app.listen(PORT, (req,res) => {
    console.log(`Server is listening to port ${PORT}`)
})