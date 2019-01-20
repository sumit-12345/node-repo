module.exports=function(sequelize,Datatypes){
    var Person=sequelize.define('person',{
        name: {
            type:Datatypes.STRING,
            allowNull:true
        },
        email:{
            type:Datatypes.STRING,
            allowNull:false
        },
        contactNo:{
            type:Datatypes.INTEGER,
            allowNull:true
        }
    })
return Person;
}