const path = require('path')
const express = require ('express')

const app = express()

const PORT = process.env.PORT || 3000
const publicDirectory = path.join(__dirname, '../public')

app.use(express.static(publicDirectory));

app.listen(PORT, ()=> {
    console.log(`Server is up on port ${PORT}`)
});
