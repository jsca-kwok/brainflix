import React from 'react';
import VideoHeading from '../video-heading/VideoHeading';
import VideoDescription from '../video-description/VideoDescription';
import CommentInput from '../comment-input/CommentInput';

const MainVideoInfo = ({mainVideoDetails}) => {
    return (
        <div className="main-video">
            <VideoHeading title={mainVideoDetails.title} channel={mainVideoDetails.channel} timestamp={mainVideoDetails.timestamp} views={mainVideoDetails.views} likes={mainVideoDetails.likes} />
            <VideoDescription description={mainVideoDetails.description} />
            <CommentInput commentCount={mainVideoDetails.comments.length} />
        </div>
    )
}

export default MainVideoInfo;