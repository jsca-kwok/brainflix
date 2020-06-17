import React from 'react';
import MainVideoInfo from '../main-video-info/MainVideoInfo';
import CommentContainer from '../comment-container/CommentContainer';
import SideVideoContainer from '../side-video-container/SideVideoContainer'



class Main extends React.Component {
    render() {
      return (
        <div className="main">
            <MainVideoInfo />
            <CommentContainer />
            <SideVideoContainer />
        </div>
      );
    }
  }
  
export default Main;
