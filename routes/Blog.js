

const express = require("express")

const {
    newblog,
    getBlogs,
    getaBlog,
    deletBlogs,
    updateBlogs
} = require('../controllers/blogscontrollers')

const router = express.Router()

// get all Blogs
router.get("/", getBlogs)


// get a single blogs
router.get("/:id", getaBlog)

// post a new blog
router.post("/", newblog)

// delete a blog
router.delete("/:id", deletBlogs)

// update blog
router.patch("/:id", updateBlogs)




module.exports = router