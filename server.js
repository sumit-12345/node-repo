
var express = require('express');
var app = express();

app.get('/abc/:name', function (req, res) {
    let name=req.params.name
    let data=getData();
    let personInfo=null;    
    for(let i=0;i<data.length;i++){
        if(data[i].name==name){
        personInfo=data[i]
        
        }
    }
    if(personInfo==null){
        console.log('if block')
        res.status(200)
        res.send('Please send a valid username.')
    }else{
        console.log('Else block.')
        res.status(200)
        res.setHeader('Content-Type', 'application/json');
        res.send(personInfo)

    }    
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

app.post('/saveData',(req,res)=>{
    res.send('Data saved.')
})

 let getData=()=>{
     let dt=[{'name':'Sumit','contact-no':'9611277653'},
            {'name':'Tarun','contact-no':'9937702365'}]
    return dt;
 }