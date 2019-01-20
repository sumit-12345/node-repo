const Sequelize=require('sequelize')
let sequelize=new Sequelize('test','root','mitu.1234',{dialect:'mysql',host:'localhost'});



let db={}
db['Employee']=sequelize.import('./Employee.js')
db.sequelize=sequelize
db.Sequelize=Sequelize
module.exports=db