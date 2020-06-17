import React from 'react';
import './hero.scss';
import video from '../../assets/video/brainstation-sample-video.mp4';
import poster from '../../assets/images/video-list-0.jpg';

class Hero extends React.Component {
    render() {
        return (
            <div className="hero">
                <video className="hero__video" src={video} poster={poster}></video>
            </div>
        )
    }
}

export default Hero;