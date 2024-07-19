



const { default: mongoose } = require('mongoose')
const Blogs = require('../models/Blogmodels')

// creat blog

const newblog = async (req, res) => {
    // Destructure the request body to get the necessary fields
    const { blogimage, blogtext, blogtitle } = req.body;

    // Validate the input to ensure all required fields are present
    if (!blogimage || !blogtext || !blogtitle) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Create a new blog post
        const blog = await Blogs.create({ blogimage, blogtext, blogtitle });

        // Respond with status 201 (Created) and the created blog object
        res.status(201).json(blog);
    } catch (error) {
        // Respond with status 400 (Bad Request) and the error message
        res.status(400).json({ error: error.message });
    }
};



// const newblog = async (req, res) => {
//     //    grab and destructure  your shema ito make a post request
//     const { blogimage, blogtext, blogtitle } = req.body
//     //    try and catch error
//     try {
//         const blog = await Blogs.create({ blogimage, blogtext, blogtitle })
//         res.status(200).json(blog)
//         // catch your error here
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }

// }


//  get all blogs
const getBlogs = async (req, res) => {
    const blog = await Blogs.find({}).sort({ createdAt: -1 })
    res.status(200).json(blog)

}

// get single blogs
const getaBlog = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.objectid.isValid(id)) {
        return res.status(404).json({ error: 'No such blog esxist' })
    }

    
    const blog = await Blogs.findById(id)

    if (!blog) {
        return res.status(404).json({ error: 'No such blog' })
    }
    res.status(200).json(blog)


}

// delete blogs

const deletBlogs = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: 'No such blog' })
    }
    const blog = await Blogs.findOneAndDelete({_id:id})
    res.json({ msg: 'delete blog' })
    if (!blog) {
        return res.status(404).json({ error: 'No such blog' })
    }
    res.status(200).json(blog)

  
}

// update blogs
const updateBlogs = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: 'No such blog' })
    }
    const blog = await Blogs.findOneAndUpdate({_id:id}, {
        ...req.body  
    }  )

    
    if (!blog) {
        return res.status(404).json({ error: 'No such blog' })
    }
    res.status(200).json(blog)

  
}


module.exports = {
    newblog, getBlogs, getaBlog, deletBlogs, updateBlogs 


}
