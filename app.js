require('dotenv').config()
const express=require('express')
const client=require('./connection')
const bodyparser=require('body-parser')


var Router=require('./routes')


const app=express();
const PORT=process.env.PORT


client.connect((err)=>{
    if(err) throw err;
    console.log('connected to database');
})



app.use(express.json());
app.use('/',Router)

app.listen(PORT,()=>{
    console.log('server connected');
})