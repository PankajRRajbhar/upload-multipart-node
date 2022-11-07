const express=require('express');
const upload=require('./middleware');


const app= express();
const { GOOGLE_CLOUD_PRIVATE_KEY ,GOOGLE_CLOUD_BUCKET_NAME,GOOGLE_CLOUD_CLIENT_EMAIL,GOOGLE_CLOUD_PROJECT_ID} = require('../fs-demo/config/vars');

const mw=upload({ STORAGE:'google-cloud',GC_PRIVATE_KEY:GOOGLE_CLOUD_PRIVATE_KEY,
            GC_CLIENT_EMAIL:GOOGLE_CLOUD_CLIENT_EMAIL,
            GC_BUCKET_NAME:GOOGLE_CLOUD_BUCKET_NAME,GC_PROJECT_ID:GOOGLE_CLOUD_PROJECT_ID,
            FOLDER_NAME:'category'
        });

// const mw=upload({STORAGE:'local',PATH:__dirname + '/name'})



app.use(express.json())


app.post('/login',mw,(req,res)=>{
    console.log(JSON.parse(req.body));
    res.json(JSON.parse(req.body));
})

app.listen(3000,()=>{
    console.log('Server is on');
});