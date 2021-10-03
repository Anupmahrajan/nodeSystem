const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.json({
      name:"anup",
  })
})
 
app.get('/profile', function (req, res) {
    res.send('this is profile')
  })

app.listen(3000)