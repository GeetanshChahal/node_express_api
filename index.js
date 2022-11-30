const express=require('express');
const bodyParser=require('body-parser');
const teachersRoutes=require('./routes/teachers.js');

const app=express();
const PORT=8000;    

app.use(bodyParser.json());     //used to read json file
app.use('/teachers',teachersRoutes);

app.get('/',(req,res)=>{
    res.send('Hello from homepage!!');
})

app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`));
