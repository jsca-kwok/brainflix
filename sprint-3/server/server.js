const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const videoList = require('./videoList.json');
const videoDetail = require('./videoDetail.json')

app.use(cors());
app.use(bodyParser.json());

// GET /videos - array of side videos
app.get('/videos', (_req, res) => {
    res.json(videoList);
})

// GET /videos/:id
app.get('/videos/:id', (req, res) => {
    const videoId = req.params.id;
    res.json(videoDetail.filter(video => {
        return video.id === videoId;
    }).pop())
})


app.listen(8080, (err) => {
    if (err) {
        console.log(error)
        return;
    }
    console.log('running on port 8080');
})