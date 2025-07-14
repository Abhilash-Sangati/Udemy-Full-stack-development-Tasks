const express = require('express');
const app = express();
const PORT = 3030;

// Simulating a simple in-memory database
let posts = [];

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Routes
// Home page - Display all posts
app.get('/', (req, res) => {
    res.render('index', { posts });
});

// Create a new post
app.get('/create', (req, res) => {
    res.render('create');
});
app.post('/create', (req, res) => {
    const { title, content } = req.body;
    posts.push({ title, content });
    res.redirect('/');
});

// Edit an existing post
app.get('/edit/:id', (req, res) => {
    const post = posts[req.params.id];
    res.render('edit', { post, id: req.params.id });
});
app.post('/edit/:id', (req, res) => {
    const { title, content } = req.body;
    posts[req.params.id] = { title, content };
    res.redirect('/');
});

// Delete a post
app.get('/delete/:id', (req, res) => {
    posts.splice(req.params.id, 1);
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
