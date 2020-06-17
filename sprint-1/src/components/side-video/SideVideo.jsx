import React from 'react';
import './side-video.scss';

class SideVideo extends React.Component {
    render() {
        return (
            <div className="side-video">
                <div className="side-video__thumbnail" /> 
                <div className="side-video__text-container">
                    <h3 className="side-video__title">Become A Travel Pro In One Easy Lesson...</h3>
                    <p className="side-video__channel">Scotty Cranmer</p>
                </div>
            </div>
        )
    }
}

export default SideVideo;