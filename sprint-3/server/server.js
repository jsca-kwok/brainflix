const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const videoRoutes = require('./routes/video-routes/videoRoutes');
const likesRoutes = require('./routes/likes-routes/likesRoutes');
const commentRoutes = require('./routes/comments-routes/commentRoutes');
const viewsRoutes = require('./routes/views-routes/viewsRoutes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use('/', videoRoutes);
app.use('/', likesRoutes);
app.use('/', commentRoutes);
app.use('/', viewsRoutes);

app.listen(8080, (err) => {
    if (err) {
        console.log(error);
        return;
    }
    console.log('running on port 8080');
})