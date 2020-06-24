import React from 'react';
import MainVideoInfo from '../main-video-info/MainVideoInfo';
import CommentContainer from '../comment-container/CommentContainer';
import SideVideoContainer from '../side-video-container/SideVideoContainer';
import './main.scss';

const Main = ({mainVideoDetails}) => {
    return (
      <div className="main">
        <div className="main__video-details">
          <MainVideoInfo mainVideoDetails={mainVideoDetails} />
          <CommentContainer mainVideoDetails={mainVideoDetails} />
        </div>
          <SideVideoContainer />
      </div>
    );
  }
  
export default Main;
