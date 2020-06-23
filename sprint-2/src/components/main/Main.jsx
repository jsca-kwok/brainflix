import React from 'react';
import MainVideoInfo from '../main-video-info/MainVideoInfo';
import CommentContainer from '../comment-container/CommentContainer';
import SideVideoContainer from '../side-video-container/SideVideoContainer';
import './main.scss';

const Main = (props) => {
    return (
      <div className="main">
        <div className="main__video-details">
          <MainVideoInfo mainVideo={props.mainVideo} />
          <CommentContainer mainVideo={props.mainVideo} />
        </div>
          <SideVideoContainer sideVideos={props.sideVideos} />
      </div>
    );
  }
  
export default Main;
