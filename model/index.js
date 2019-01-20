const fs=require('fs')
const Sequelize=require('sequelize')
const env=process.env.NODE_ENV||'developement'
const config=require(`${__dirname}/../config/config.js`)[env]

let sequelize=new Sequelize(config.database,config.username,config.password,{
    host:'localhost',
    dialect:'mysql'
})

let db={}
db['Person']=sequelize.import(`persons.js`)
db.sequelize=sequelize
db.Sequelize=Sequelize
module.exports=db