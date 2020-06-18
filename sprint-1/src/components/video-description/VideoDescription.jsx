import React from 'react';
import './video-description.scss';

const VideoDescription = (props) => {
    return (
        <div className="main-video__description">
            <p className="main-video__description-text">
                {props.description}
            </p>
        </div>
    )
}

export default VideoDescription;