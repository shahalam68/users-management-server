const express = require('express')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());


const users =[
    {id:1, name: 'Shabana', email:' shabana@gmail.com'},
    {id:2, name: 'Shabnoor', email:' Shabnoor@gmail.com'},
    {id:3, name: 'Shabila', email:' Shabila@gmail.com'},
]

app.get('/', (req, res) =>{
    res.send('Users Server is running')
})


app.get('/users', (req,res)=>{
    res.send(users);
})

app.post('/users',(req, res))



app.listen(port,() =>{
    console.log(`Server is running on port: ${port}`)
})