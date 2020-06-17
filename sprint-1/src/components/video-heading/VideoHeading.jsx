import React from 'react';
import './video-heading.scss';
import viewsIcon from '../../assets/icons/svg/icon-views.svg';
import likesIcon from '../../assets/icons/svg/icon-likes.svg';

class VideoHeading extends React.Component {
    render() {
        return (
            <div className="main-video__heading">
                <h2 className="main-video__title">BMX Rampage: 2018 Highlights</h2>
                <div className="main-video__upload-detail-container">
                    <div className="main-video__upload-details">
                        <p className="main-video__channel">By Red Cow</p>
                        <p className="main-video__timestamp">12/18/2018</p>
                    </div>
                    <div className="main-video__stats">
                        <img className="main-video__views-icon" src={viewsIcon} alt="" />
                        <p className="main-video__views">1,001,023</p>
                        <img className="main-video__likes-icon" src={likesIcon} alt="" />
                        <p className="main-video__likes">110,985</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoHeading;