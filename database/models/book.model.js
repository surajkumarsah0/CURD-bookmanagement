// books, vitra=>bookName , bookAuthor , bookGenre , publishedYear


// book kko lagi table banaune
const bookModel = (sequelize, DataTypes)=>{
    // define method is used to create a new model in sequelize
    // define method takes two arguments, first is the name of the model and second is the attributes of the model
    // attributes are the columns of the table (attributes vaneko table ko column haru hunxa)

    const book=sequelize.define('books', {
       bookName:{
        type: DataTypes.STRING,
        allowNull:false,
       },
       bookAuthor:{
        type:DataTypes.STRING,
        //allowNull:false,
        defaultValue:"Suraj Gupta",
       },
       bookPrice:{
        type:DataTypes.INTEGER,
        allowNull:false,
       },
       bookGenre:{
        type:DataTypes.INTEGER,
        allowNull:false,
       },
       publishedYear:{
        type:DataTypes.INTEGER,
        allowNull:true,
       }
    });
    return book

}
module.exports=bookModel