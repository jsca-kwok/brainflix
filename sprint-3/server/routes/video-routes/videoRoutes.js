const router = require('express').Router();
const data = require('../../data.json');

// GET /videos 
router.get('/videos', (_req, res) => {
    res.send(data.videoList);
})

// GET /videos/:id
router.get('/videos/:id', (req, res) => {
    const videoId = req.params.id;
    res.send(data.videoDetails.slice().filter(video => {
        return video.id === videoId;
    }).pop());
})

// POST /videos
router.post('/videos', (req, res) => {
    if (req.body) {
        data.videoList.push({
            id: req.body.id,
            title: req.body.title,
            channel: req.body.channel,
            image: req.body.image
        });
        data.videoDetails.push(req.body);
        return res.status(201).send(data.videoList);
    } else {
        return res.status(400).send('No request body');
    }
})

module.exports = router;