import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: {type:String},
        title: {type:String, required:true},
        author:  {type:String, required:true},
        publishingcompany: {type:String, required:true},
        pagesNumber:{type:Number}
    }
    
);

const livros = mongoose.model('livros', livroSchema);


export default livros;