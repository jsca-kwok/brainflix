import React from 'react';
import './hero.scss';
import video from '../../assets/video/brainstation-sample-video.mp4';
import poster from '../../assets/images/video-list-0.jpg';
import playIcon from '../../assets/icons/svg/icon-play.svg';
import screenIcon from '../../assets/icons/svg/icon-fullscreen.svg';
import volumeIcon from '../../assets/icons/svg/icon-volume.svg';

class Hero extends React.Component {
    render() {
        return (
            <div className="hero">
                <video className="hero__video" src={video} poster={poster}></video>
                <div className="hero__controls">
                    <div className="hero__play-container">
                        <a href="#"><img className="hero__controls-play" src={playIcon} alt="play button"/></a>
                    </div>
                    <div className="hero__scrubber-container">
                        <div className="hero__slider"></div>
                        <p className="hero__slider-time">0:00 / 0:42</p>
                    </div>
                    <div className="hero__settings-container">
                        <img className="hero__controls-fullscreen" src={screenIcon} alt="full screen icon" />
                        <img className="hero__controls-volume" src={volumeIcon} alt="volume icon" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;