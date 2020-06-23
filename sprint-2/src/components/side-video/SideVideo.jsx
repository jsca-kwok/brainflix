import React from 'react';
import './side-video.scss';

const SideVideo = (props) => {
    return (
        <div className="side-video">
            <div className="side-video__thumbnail-container">
                <img className="side-video__thumbnail" src={props.image} alt={props.title} />
            </div> 
            <div className="side-video__text-container">
                <h3 className="side-video__title">{props.title}</h3>
                <p className="side-video__channel">{props.channel}</p>
            </div>
        </div>
    )
}

export default SideVideo;