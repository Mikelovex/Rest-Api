const express = require('express')
const router = express.Router()
const Post = require('../models/Posts')




router.get('/posts', (req, res) => {
    Post.findAll().then((posts) => {
        console.log(posts)
        res.status(200).json({posts: posts})
    })
})

router.get('/posts/:id', (req, res) => {
    const id = req.params.id

    Post.findByPk(id).then((post) => {
        console.log(post)
        if(post == undefined) {
            res.status(401).json({error: 'post não encontrado'})
        }else {
            res.status(200).json({post: post})
        }
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


router.put('/post/edit/:id', (req, res) => {
    const id = req.params.id
    const {title, post, image} = req.body

    Post.update({title: title, post: post, image: image}, {
        where: {
        id: id
        }
    }).then(() => res.status(200).json({msg: 'post atualizado'}))
    
})


router.delete('/posts/:id', (req, res) => {
    const id = req.params.id

    Post.destroy({where: {id: id}}).then(() => res.status(200).json({msg: 'post excluido'}))
})



module.exports = router