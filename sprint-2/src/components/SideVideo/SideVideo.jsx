import React from 'react';
import './SideVideo.scss';

const SideVideo = ({image, title, channel}) => {
    return (
        <div className="side-video">
            <div className="side-video__thumbnail-container">
                <img className="side-video__thumbnail" src={image} alt={title} />
            </div> 
            <div className="side-video__text-container">
                <h3 className="side-video__title">{title}</h3>
                <p className="side-video__channel">{channel}</p>
            </div>
        </div>
    )
}

export default SideVideo;