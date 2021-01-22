const express = require('express');
const app = express();

app.use(express.static('public'))

const listOfEmails=[
    {email:'6@gmail.com'},
    {email:'1@gmail.com'},
    {email:'2@gmail.com'},
    {email:'3@gmail.com'},
    {email:'4@gmail.com'},
    {email:'5@gmail.com'},
]


app.get('/get-emails',(req, res)=>{
    res.send(listOfEmails)
  })

const port = process.env.PORT || 3003;


app.listen(port, function () {
    console.log('listening', port)
  })