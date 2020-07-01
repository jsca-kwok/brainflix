import React from 'react';
import './hero.scss';
import playIcon from '../../assets/icons/svg/icon-play.svg';
import pauseIcon from '../../assets/icons/svg/icon-pause.svg';
import screenIcon from '../../assets/icons/svg/icon-fullscreen.svg';
import volumeIcon from '../../assets/icons/svg/icon-volume.svg';
import scrubberIcon from '../../assets/icons/svg/icon-scrubber-control.svg';

const Hero = ({src, poster, duration, playing, playState}) => {

    const video = document.getElementById('video');
    const progressBar = document.getElementById('progress');
    const currentTime = document.getElementById('currentTime');
    const scrubber = document.getElementById('scrubber');

    const togglePlay = (e) => {
        if (playing === false) {
            video.play();
            playState(true);
        } else {
            video.pause();
            playState(false);
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
        playState(false);
    }

    const progressBarFill = () => {
        const barFill = (video.currentTime/10);
        progressBar.value = barFill;
        const formatCurrentTime = barFill.toFixed(2).replace('.', ':');
        currentTime.innerText = formatCurrentTime;
    }

    return (
        <div className="hero">
            <video 
                id='video' 
                className="hero__video" 
                src={src} poster={poster} 
                onEnded={() => {endHandler()}}
                onTimeUpdate={() => {progressBarFill()}}>
            </video>
            <div className="hero__controls">
                <div className="hero__play-container">
                    {/* show play icon if video is paused and show pause icon if video is playing */}
                    {
                        playing === false ? 
                        <img onClick={(e) => {togglePlay(e)}} className="hero__controls-play" src={playIcon} alt="play button"/> 
                        : <img onClick={(e) => {togglePlay(e)}} className="hero__controls-pause" src={pauseIcon} alt="pause button"/>
                    }
                </div>
                <div className="hero__scrubber-container">
                    {/* <img className="hero__scrubber" src={scrubberIcon} id="scrubber" alt="scrubber" /> */}
                    <progress id="progress" className="hero__slider" value="0" min="0" />
                    <p className="hero__slider-time">
                        <span className="hero__current-time" id="currentTime"></span> / {duration}
                    </p>
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