
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const db=require('./model/index1')
let emp=db.Employee

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

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
db.sequelize.sync({force:true})

app.post('/saveData',(req,res)=>{
    console.log(req.body)
        emp.bulkCreate(req.body).then((data)=>{
            let empData=[]
            emp.findAll().then(d=>{
                // d.forEach(element => {
                //     empData.push(element.dataValues)
                // });
                for(let i=0;i<d.length;i++){
                    empData[i]=d[i].dataValues
                }
            }).then(()=>{
                res.status(200)
                res.send(`has added. ${JSON.stringify(empData)}`)
            })
           
        }).catch((err)=>{
            console.log('error',err)
        })
})

 let getData=()=>{
     let dt=[{'name':'Sumit','contact-no':'9611277653'},
            {'name':'Tarun','contact-no':'9937702365'}]
    return dt;
 }
