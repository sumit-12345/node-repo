let emp=(sequelize,datatype)=>{
    let Employee=sequelize.define('Employee',{
        id:{
            type:datatype.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement: true
        },
        name:{
            type:datatype.STRING,
            allowNull:true
        },
        contactNo:{
            type:datatype.STRING,
            allowNull:true
        },
        address:{
            type:datatype.STRING,
            allowNull:true
        }      
    })
    return Employee;
}

module.exports=emp;