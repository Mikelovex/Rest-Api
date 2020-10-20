const express = require('express')
const router = express.Router()
const Post = require('../models/Posts')

router.get('/posts', (req, res) => {
    Post.findAll().then((posts) => {
        console.log(posts)
        res.status(200).json({posts: posts})
    })
})

router.post('/post/create', (req, res) => {
    const {title, post, image} = req.body

    Post.create({
        title: title,
        post: post,
        image: image
    }).then(() => {
        res.status(200).json({
            title: title,
            post: post,
            image: image
        })
    })
})


module.exports = router