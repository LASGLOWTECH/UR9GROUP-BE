const mongoose= require('mongoose')
const Schema= mongoose.Schema

const BlogSchema=new Schema({
    blogimage:{
        type: String ,
        required:true,
    },
    blogtext:{
        type:String,
        required:true,
    },

    blogtitle:{
        type:String,
        required:true,
    }
}, {timestamps:true})

// Schema defines the structure of your data base
module.exports=mongoose.model('Blogmodels', BlogSchema)