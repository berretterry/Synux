const express = require('express');
const path = require('path');

const port = '4357'

const app = express()

app.use(express.static(path.join(__dirname, '../../dist')))

app.get('/', (req, res) => {
  console.log("It\'s working!!!")
})

app.listen(port, () => {console.log(`Server running on port ${port}`)})