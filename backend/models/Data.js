const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    imageurl: {
        type: String}
});

const Blog = mongoose.model("BlogSchema",blogSchema);

module.exports = Blog;