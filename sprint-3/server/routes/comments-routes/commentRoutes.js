const router = require('express').Router();
const data = require('../../data.json');

// POST /videos/:videoId/comments
router.post('/videos/:videoId/comments', (req, res) => {
    const videoId = req.params.videoId;
    const videoDetails = data.slice().pop();
    const video = videoDetails.filter(video => {
        return video.id === videoId
    }).pop();
    video.comments.push(req.body);
    return res.status(201).send(req.body);
})

// DELETE /videos/:videoId/comments/:commentid
router.delete('/videos/:videoId/comments/:commentId', (req, res) => {
    const videoId = req.params.videoId;
    const commentId = req.params.commentId;
    const videoDetails = data.slice().pop();
    const video = videoDetails.filter(video => {
        return video.id === videoId
    }).pop();
    const commentIndex = video.comments.findIndex(comment => {
        comment.id === commentId
    });
    video.comments.splice(commentIndex, 1);
    return res.status(200).send(video.comments.splice(commentIndex, 1));
})

module.exports = router;
