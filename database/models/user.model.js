

const userModel=(sequelize,DataTypes)=>{
    const user=sequelize.define("user",{
        userName:{
            type:DataTypes.STRING,
            allowNull:false,
        

        },
        userEmail:{
            type:DataTypes.STRING,
            allowNull:false,
        
        },
        Password:{
            type:DataTypes.STRING,
            allowNull:false,
        },

    })
    return user

}
module.exports=userModel