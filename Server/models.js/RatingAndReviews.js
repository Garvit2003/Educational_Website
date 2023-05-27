const mongoose = require("mongoose");

const ratingAndReviewsSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Typed.ObjectId,
        required:true,
        ref:"User",
    },
    rating:{
        type:Number,
        required:true,
    },
    review:{
        type:String,
        required:true,
    }
});
module.exports= mongoose.model("RatingAndReviews", ratingAndReviewsSchema)