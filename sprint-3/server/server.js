const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const data = require('./data.json');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET /videos 
app.get('/videos', (_req, res) => {
    const videoList = data.slice().shift();
    res.send(videoList);
})

// GET /videos/:id
app.get('/videos/:id', (req, res) => {
    const videoId = req.params.id;
    const videoDetails = data.slice().pop();
    res.send(videoDetails.filter(video => {
        return video.id === videoId;
    }).pop())
})

// POST /videos
app.post('/videos', (req, res) => {
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

// PUT /videos/:videoId/likes
app.put('/videos/:videoId/likes', (req, res) => {
    const videoId = req.body.id;
    const videoDetails = data.slice().pop();
    videoDetails.map(video => {
        video.id === videoId ? video.likes++ : null
    })
    return res.status(201).send(videoDetails);
})

// POST /videos/:videoId/comments
app.post('/videos/:videoId/comments', (req, res) => {
    const videoId = req.params.videoId;
    const videoDetails = data.slice().pop();
    const video = videoDetails.filter(video => {
        return video.id === videoId
    }).pop();
    video.comments.push(req.body);
    return res.status(201).send(req.body);
})

// DELETE /videos/:videoId/comments/:commentid
app.delete('/videos/:videoId/comments/:commentId', (req, res) => {
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

app.listen(8080, (err) => {
    if (err) {
        console.log(error);
        return;
    }
    console.log('running on port 8080');
})