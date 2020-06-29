import React from 'react';
import VideoHeading from '../VideoHeading/VideoHeading';
import VideoDescription from '../VideoDescription/VideoDescription';
import CommentInput from '../CommentInput/CommentInput';

const MainVideoInfo = ({mainVideoDetails, newCommentHandler}) => {
    return (
        <div className="main-video">
            <VideoHeading 
                title={mainVideoDetails.title} 
                channel={mainVideoDetails.channel} 
                timestamp={mainVideoDetails.timestamp} 
                views={mainVideoDetails.views} 
                likes={mainVideoDetails.likes} />
            <VideoDescription description={mainVideoDetails.description} />
            <CommentInput 
                videoId={mainVideoDetails.id} 
                commentCount={mainVideoDetails.comments.length} 
                newCommentHandler={newCommentHandler} />
        </div>
    )
}

export default MainVideoInfo;