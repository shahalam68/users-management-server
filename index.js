const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const users =[
    {id:1, name: 'Shabana', email:' shabana@gmail.com'},
    {id:1, name: 'Shabana', email:' shabana@gmail.com'},
    {id:1, name: 'Shabana', email:' shabana@gmail.com'},
    {id:1, name: 'Shabana', email:' shabana@gmail.com'},
    {id:1, name: 'Shabana', email:' shabana@gmail.com'},
]

app.get('/', (req, res) =>{
    res.send("Users Management server is running")
})
app.listen(port,() =>{
    console.log(`Server is running on port: ${port}`)
})