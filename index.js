const data = require('./db.json');
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
app.use(cors());
app.options('*', cors());
app.use(express.json())
const port = 3000;

app.get('/api/dashboard', (req, res) => {
  res.send(data.data);
})

app.post('/api/login',(req,res)=>{
    //Mock user
    const user = {
        id:Date.now(),
        username:'user@aemenersol.com',
        password:'Test@123'
    }

    const reqUsername = req.body.username +'';
    const reqPassword = req.body.password+'';

    if((reqUsername === user.username) && 
        (reqPassword === user.password)){
            //send above as payload
    jwt.sign({user},'secretkey',(err,token)=>{
        res.json({
            token
        })
    });
        
    }else {
        //res.json({});
        res.sendStatus(204);
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})