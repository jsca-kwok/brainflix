import React from 'react';
import './VideoHeading.scss';
import viewsIcon from '../../assets/icons/svg/icon-views.svg';
import likesIcon from '../../assets/icons/svg/icon-likes.svg';
import Timestamp from '../Timestamp/Timestamp';

const VideoHeading = ({title, channel, timestamp, views, likes}) => {
    return (
        <div className="main-video__heading">
            <h2 className="main-video__title">{title}</h2>
            <div className="main-video__upload-detail-container">
                <div className="main-video__upload-details">
                    <p className="main-video__channel">{channel}</p>
                    <Timestamp timestamp={timestamp}/>
                </div>
                <div className="main-video__stats">
                    <img className="main-video__views-icon" src={viewsIcon} alt="" />
                    <p>{views}</p>
                    <img className="main-video__likes-icon" src={likesIcon} alt="" />
                    <p>{likes}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoHeading;