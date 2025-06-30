function addPost() {
  const content = document.getElementById('postContent').value;
  fetch('/api/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content })
  }).then(() => location.reload());
}
fetch('/api/posts')
  .then(res => res.json())
  .then(posts => {
    const feed = document.getElementById('feed');
    posts.reverse().forEach(p => {
      const div = document.createElement('div');
      div.className = 'post';
      div.textContent = p.content;
      feed.appendChild(div);
    });
  });