var express = require('express')
var path = require('path');

var app = express()
 
app.get('/', (req, res)=> {
  res.send('Hello World To Home Page')
})

app.get('/profile' , (req , res)=>{
    res.send('Hello World To Profile Page')
})

app.get('/file',(req , res)=>{
    debugger;
    let imgName = req.query.name;
    res.sendFile(path.join(__dirname,`./assets/${imgName}.jpg`))
})
 
app.listen(3000)