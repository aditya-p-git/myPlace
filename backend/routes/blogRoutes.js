const express = require('express')
const router = express.Router()
const {getBlog, setBlog, updateBlog, deleteBlog} = require('../controllers/blogController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getBlog).post(protect, setBlog)

router.route('/:id').put(protect, updateBlog).delete(protect, deleteBlog)

module.exports = router
