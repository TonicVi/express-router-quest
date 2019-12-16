const express = require('express');
const fakeComments = require('../data/comments');

const router = express.Router({ mergeParams: true });

router.get('/all', (req, res) => {
  res.json(fakeComments);
});

// Get a list of comments
router.get('/', (req, res) => {
  const postId = Number(req.params.postId);
  const postComments = fakeComments.filter((comment) => comment.post_id === postId);
  res.json(postComments);
});

module.exports = router;
