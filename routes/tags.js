const express = require('express');
const fakeTags = require('../data/tags');
const fakePosts = require('../data/posts');

const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
  res.json(fakeTags);
});

router.get('/:tagId', (req, res) => {
  const tagId = Number(req.params.tagId);
  const foundTag = fakeTags.find((tag) => tag.id === tagId);
  if (!foundTag) {
    return res.status(404).json({
      error: 'Tag not found',
    });
  }
  return res.json(foundTag);
});

router.get('/:tagId/posts', (req, res) => {
  const tagId = Number(req.params.tagId);
  const tags = fakeTags.find((tag) => tag.id === tagId);
  if (!tags) {
    return res.status(404).json({ error: 'tag not found' });
  }
  const foundPosts = fakePosts.filter((post) => post.tag_id.includes(tagId));
  return res.json(foundPosts);
});

module.exports = router;
