const router = require('express').Router();
const data = require('../../data.json');

// GET /videos 
router.get('/videos', (_req, res) => {
    const videoList = data.slice().shift();
    res.send(videoList);
})

// GET /videos/:id
router.get('/videos/:id', (req, res) => {
    const videoId = req.params.id;
    const videoDetails = data.slice().pop();
    res.send(videoDetails.filter(video => {
        return video.id === videoId;
    }).pop())
})

// POST /videos
router.post('/videos', (req, res) => {
    const videoList = data.slice().shift();
    const videoDetails = data.slice().pop();
    videoList.push({
        id: req.body.id,
        title: req.body.title,
        channel: req.body.channel,
        image: req.body.image});
    videoDetails.push(req.body);
    return res.status(201).send(videoList);
})

module.exports = router;