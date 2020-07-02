const router = require('express').Router();
const data = require('../../data.json');

// PUT /videos/:videoId/likes
router.put('/videos/:videoId/likes', (req, res) => {
    const videoId = req.body.id;
    data.videoDetails.slice().map(video => {
        video.id === videoId ? video.likes++ : null
    })
    return res.status(201).send(data.videoDetails);
})

module.exports = router;