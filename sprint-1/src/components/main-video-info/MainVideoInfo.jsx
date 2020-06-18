import React from 'react';
import VideoHeading from '../video-heading/VideoHeading';
import VideoDescription from '../video-description/VideoDescription';
import CommentInput from '../comment-input/CommentInput';

const MainVideoInfo = (props) => {
    return (
        <div className="main-video">
            <VideoHeading title={props.mainVideo.title} channel={props.mainVideo.channel} timestamp={props.mainVideo.timestamp} views={props.mainVideo.views} likes={props.mainVideo.likes} />
            <VideoDescription description={props.mainVideo.description} />
            <CommentInput commentCount={props.mainVideo.comments.length} />
        </div>
    )
}

export default MainVideoInfo;