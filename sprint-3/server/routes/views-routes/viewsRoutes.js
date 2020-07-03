const router = require('express').Router();
const data = require('../../data.json');

// PUT /videos/:videoId/views
router.put('/videos/:videoId/views', (req, res) => {
    const videoId = req.body.id;
    const video = data.videoDetails.filter(video => {
        return video.id === videoId
    });
    video.map(video => video.views++);
    return res.status(201).send(video.pop());
})

module.exports = router;