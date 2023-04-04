const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const db = require('./db/db-connection.js');


const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route "/""
app.get('/', (req, res) => {
    res.json({ message: 'Hola, from My template ExpressJS with React-Vite' });
});

// BLOG GET REQUEST------------------------------------------------------------------------------------
//working
app.get('/api/blog', async (req, res) => {
    try {
        const { rows: blog } = await db.query('SELECT * FROM blog');
        res.send(blog);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

// BLOG POST REQUEST------------------------------------------------------------------------------------
//working
app.post('/api/postblog', async (req, res) => {
    try {
        const newPost = {
            title: req.body.title,
            author: req.body.author,
            excerpt: req.body.excerpt,
            text: req.body.text,
            image: req.body.image
        };
        //console.log([newStudent.firstname, newStudent.lastname, newStudent.iscurrent]);
        const result = await db.query(
            'INSERT INTO blog(title, author, excerpt, text, image) VALUES($1, $2, $3, $4, $5) RETURNING *',
            [newPost.title, newPost.author, newPost.excerpt, newPost.text, newPost.image],
        );
        console.log(result.rows[0]);
        res.json(result.rows[0]);

    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });
    }

});

// COMMENT GET REQUEST------------------------------------------------------------------------------------
//working
app.get('/api/comments', async (req, res) => {
    try {
        const { rows: comments } = await db.query('SELECT * FROM comments');
        res.send(comments);
    } catch (e) {
        return res.status(400).json({ e });
    }
});


// COMMENT POST REQUEST------------------------------------------------------------------------------------
//working
app.post('/api/postcomments', async (req, res) => {
    try {
        const newComment = {
            id_blog: req.body.id_blog,
            username: req.body.username,
            commenttext: req.body.commenttext
        };
        //console.log([newStudent.firstname, newStudent.lastname, newStudent.iscurrent]);
        const result = await db.query(
            'INSERT INTO comments(id_blog, username, commenttext) VALUES($1, $2, $3) RETURNING *',
            [newComment.id_blog, newComment.username, newComment.commenttext],
        );
        console.log(result.rows[0]);
        res.json(result.rows[0]);

    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });
    }

});


// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Hola, Server listening on ${PORT}`);
});