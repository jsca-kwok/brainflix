import React from 'react';
import './video-heading.scss';
import viewsIcon from '../../assets/icons/svg/icon-views.svg';
import likesIcon from '../../assets/icons/svg/icon-likes.svg';
import Timestamp from '../timestamp/Timestamp';

const VideoHeading = (props) => {
    return (
        <div className="main-video__heading">
            <h2 className="main-video__title">{props.title}</h2>
            <div className="main-video__upload-detail-container">
                <div className="main-video__upload-details">
                    <p className="main-video__channel">{props.channel}</p>
                    <Timestamp timestamp={props.timestamp}/>
                </div>
                <div className="main-video__stats">
                    <img className="main-video__views-icon" src={viewsIcon} alt="" />
                    <p>{props.views}</p>
                    <img className="main-video__likes-icon" src={likesIcon} alt="" />
                    <p>{props.likes}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoHeading;