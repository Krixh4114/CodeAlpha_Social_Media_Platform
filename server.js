const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = 3002;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
const filePath = path.join(__dirname, 'posts.json');
app.get('/api/posts', (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  res.json(data.posts);
});
app.post('/api/posts', (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  const newPost = { content: req.body.content };
  data.posts.push(newPost);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.status(201).send('Post added');
});
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));