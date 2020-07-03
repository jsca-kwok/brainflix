import React from 'react';
import './video-heading.scss';
import viewsIcon from '../../assets/icons/svg/icon-views.svg';
import Timestamp from '../Timestamp/Timestamp';
import Likes from '../Likes/Likes';

const VideoHeading = ({title, channel, timestamp, views, likes, liked, likeVideo, videoId}) => {
    return (
        <div className="main-video__heading">
            <h2 className="main-video__title">{title}</h2>
            <div className="main-video__upload-detail-container">
                <div className="main-video__upload-details">
                    <p className="main-video__channel">{channel}</p>
                    <Timestamp timestamp={timestamp}/>
                </div>
                <div className="main-video__stats">
                    <img className="main-video__views-icon" src={viewsIcon} alt="views" />
                    <p>{parseInt(views).toLocaleString()}</p>
                    <Likes likes={likes} liked={liked} likeVideo={likeVideo} videoId={videoId} />
                </div>
            </div>
        </div>
    )
}

export default VideoHeading;