const express = require('express');
const connect = require('./config/db');
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const {jobPost , getJobPost} = require('./controller/jobDetail.controller')


app.post('/jobpost' , jobPost)

app.get('/getposts' , getJobPost)



const port = process.env.PORT || 5000
const start = async ()=>{
    await connect()
    app.listen(port, () => {

        console.log("port 5000..");
    });

}




start()