const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({data:"hello world"})
})

app.post('/posthere', (req, res) => {
    res.json({message:"You posted this", body:req.body})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})