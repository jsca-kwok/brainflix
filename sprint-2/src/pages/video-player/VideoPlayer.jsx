import React from 'react';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import Main from '../../components/main/Main';

const VideoPlayer = (props) => {
  return (
    <div>
      <Header />
      <Hero src={props.src} poster={props.poster} duration={props.duration} />
      <Main mainVideo={props.mainVideo} sideVideos={props.sideVideos} />
    </div>
  );
}


export default VideoPlayer;
