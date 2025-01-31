const router = require('express').Router();
const data = require('../../data.json');

// PUT /videos/:videoId/likes
router.put('/videos/:videoId/likes', (req, res) => {
    const videoId = req.body.id;
    const video = data.videoDetails.filter(video => {
        return video.id === videoId
    });
    if (video[0].liked === false) {
        video[0].liked = true;
        video.map(video => video.likes++);
    } else {
        video[0].liked = false;
        video.map(video => video.likes--);
    }
    return res.status(201).send(video.pop());
})

module.exports = router;