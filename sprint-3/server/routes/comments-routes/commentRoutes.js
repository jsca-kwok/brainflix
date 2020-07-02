const router = require('express').Router();
const data = require('../../data.json');

// POST /videos/:videoId/comments
router.post('/videos/:videoId/comments', (req, res) => {
    if (req.body) {
        const videoId = req.params.videoId;
        const video = data.videoDetails.filter(video => {
            return video.id === videoId
        }).pop();
        video.comments.push(req.body);
        return res.status(201).send(req.body);
    } else {
        return res.status(400).send('No request body');
    }
})

// DELETE /videos/:videoId/comments/:commentid
router.delete('/videos/:videoId/comments/:commentId', (req, res) => {
    const videoId = req.params.videoId;
    const commentId = req.params.commentId;
    const video = data.videoDetails.filter(video => {
        return video.id === videoId
    }).pop();
    const commentIndex = video.comments.findIndex(comment => {
        comment.id === commentId
    });
    video.comments.splice(commentIndex, 1);
    return res.status(200).send(video.comments.splice(commentIndex, 1));
})

module.exports = router;
