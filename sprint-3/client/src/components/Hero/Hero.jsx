import React from 'react';
import './hero.scss';
import playIcon from '../../assets/icons/svg/icon-play.svg';
import pauseIcon from '../../assets/icons/svg/icon-pause.svg';
import screenIcon from '../../assets/icons/svg/icon-fullscreen.svg';
import volumeIcon from '../../assets/icons/svg/icon-volume.svg';

const Hero = ({src, poster, duration}) => {

    const video = document.getElementById('video');
    let playing = false;

    const togglePlay = (e) => {
        playing = !playing;
        if (playing === true) {
            video.play();
            e.target.src = pauseIcon;
            e.target.alt = 'pause';
            e.target.className = 'hero__controls-pause';
        } else {
            video.pause();
            e.target.src = playIcon;
            e.target.alt = 'play';
            e.target.className = 'hero__controls-play';
        }
    }
    
    const toggleVolume = () => {
        if (video.volume >= 1) {
            video.volume = 0;
        } else {
            video.volume += 0.2
        }
    }

    const toggleFullscreen = () => {
        video.requestFullscreen();
    }

    const endHandler = () => {
        video.currentTime = 0;
        video.load();
    }

    return (
        <div className="hero">
            <video id='video' className="hero__video" src={src} poster={poster} onEnded={() => {endHandler()}}></video>
            <div className="hero__controls">
                <div className="hero__play-container">
                    <img onClick={(e) => {togglePlay(e)}} className="hero__controls-play" src={playIcon} alt="play button"/>
                </div>
                <div className="hero__scrubber-container">
                    <div className="hero__slider"></div>
                    <p className="hero__slider-time">0:00 / {duration}</p>
                </div>
                <div className="hero__settings-container">
                    <img onClick={() => {toggleFullscreen()}} src={screenIcon} alt="full screen icon" />
                    <img onClick={() => {toggleVolume()}} src={volumeIcon} alt="volume icon" />
                </div>
            </div>
        </div>
    )
}

export default Hero;