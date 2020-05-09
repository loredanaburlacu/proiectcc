const express = require("express")
const app = express()


app.use('/', express.static('frontend'))


app.get('/hello', (request, response) => {
   response.status(200).json({hello: process.env})
})

app.listen(process.env.PORT||8080)