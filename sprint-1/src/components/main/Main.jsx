import React from 'react';
import MainVideoInfo from '../main-video-info/MainVideoInfo';
import CommentContainer from '../comment-container/CommentContainer';
import SideVideoContainer from '../side-video-container/SideVideoContainer';
import './main.scss';



class Main extends React.Component {
    render() {
      return (
        <div className="main">
          <div className="main__video-details">
            <MainVideoInfo />
            <CommentContainer />
          </div>
            <SideVideoContainer />
        </div>
      );
    }
  }
  
export default Main;
