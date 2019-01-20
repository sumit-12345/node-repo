const express=require('express');
const app=express();
const db=require('./model/index1')
app.get('/sayHello',()=>{
    console.log('****************')
    console.log('I am saying Hello.')
    console.log('****************')
})

let emp=db.Employee
let array=[{
    name:'sumit',
    contactNo:9700401804,
    address:'Dharamgarh'
},
{
    name:'Tarun',
    contactNo:7894561230,
    address:'Baldiamal'
}
]

module.exports=(data)=>{
db.sequelize.sync({force:true}).then(()=>{
        const server=app.listen('9999',()=>{
            // const address=server.address().address
            // const port=server.address().port
            console.log('Listining to port no. 9999')
        }) 
        emp.bulkCreate(array).then((data)=>{
            console.log(data.length)
        }).catch((err)=>{
            console.log('error',err)
        })

}).catch((err)=>{
    console.log('Error occured.',err)
})
}