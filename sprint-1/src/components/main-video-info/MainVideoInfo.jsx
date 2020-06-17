import React from 'react';
import VideoHeading from '../video-heading/VideoHeading';
import VideoDescription from '../video-description/VideoDescription';
import CommentInput from '../comment-input/CommentInput';

class MainVideoInfo extends React.Component {
    render() {
        return (
            <div className="main-video">
                <VideoHeading />
                <VideoDescription />
                <CommentInput />
            </div>
        )
    }
}

export default MainVideoInfo;