import React from 'react';
import './VideoDescription.scss';

const VideoDescription = ({description}) => {
    return (
        <div className="main-video__description">
            <p className="main-video__description-text">
                {description}
            </p>
        </div>
    )
}

export default VideoDescription;