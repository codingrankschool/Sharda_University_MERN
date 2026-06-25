const express = require('express');

const app = express();

app.use(express.json());


app.get('/', (req, res)=>{
    res.send({message: 'Hello World'});
})


app.post('/students', (req, res)=>{
    console.log(req.body)
    res.send({message: 'Student created successfully'});
})



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});