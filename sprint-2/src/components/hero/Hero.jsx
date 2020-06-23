import React from 'react';
import './hero.scss';
import playIcon from '../../assets/icons/svg/icon-play.svg';
import screenIcon from '../../assets/icons/svg/icon-fullscreen.svg';
import volumeIcon from '../../assets/icons/svg/icon-volume.svg';

const Hero = (props) => {
    return (
        <div className="hero">
            <video className="hero__video" src={props.src} poster={props.poster}></video>
            <div className="hero__controls">
                <div className="hero__play-container">
                    <img className="hero__controls-play" src={playIcon} alt="play button"/>
                </div>
                <div className="hero__scrubber-container">
                    <div className="hero__slider"></div>
                    <p className="hero__slider-time">0:00 / {props.duration}</p>
                </div>
                <div className="hero__settings-container">
                    <img src={screenIcon} alt="full screen icon" />
                    <img src={volumeIcon} alt="volume icon" />
                </div>
            </div>
        </div>
    )
}

export default Hero;