// hami yaha database connection ko code lekhxam (sequelize ko lagi)
const {Sequelize,DataTypes} = require('sequelize');

// console.log(Sequelize)
// const Sequelize=sequelize.sequelize //return class

// const DataTypes=sequelize.DataTypes //class


// class instantiations
const sequelize = new Sequelize("postgresql://postgres.xdszzeqsxtlsjqddwemr:surajkumarsah1234@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")//giving location to sequelize class that is connection string
sequelize.authenticate()//authenticate method is used to check whether the connection is established or not 
//if connection is established then it will return promise and if not then it will throw error

.then(() => {
    console.log("authenticate vyo,connect vy0!!")
})
.catch((error) => {
    console.error("error:", error);
}); 

// 1st approach 
const db={}
db.Sequelize=Sequelize 
db.sequelize=sequelize 
// const db={
//     sequelize:sequelize,
//     Sequelize   :Sequelize
// }
// model lai trigger gareko(Calling func  that create book model)
const bookModel=require("./models/book.model")
db.books=bookModel(sequelize,DataTypes)
db.users=require("./models/user.model")(sequelize,DataTypes)



// migrate gareko code (migration means if hami le code ma kei change garim vne tele lai database me reflex garnu)

sequelize.sync({alter:false}).then(()=>{
    console.log("table create vyo")
})




module.exports=db //exporting db object to use in other files
