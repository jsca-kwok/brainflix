import React from 'react';
import MainVideoInfo from '../main-video-info/MainVideoInfo';
import CommentContainer from '../comment-container/CommentContainer';
import SideVideoContainer from '../side-video-container/SideVideoContainer';
import './main.scss';

const Main = ({mainVideoDetails, newCommentHandler, deleteCommentHandler}) => {
    return (
      <div className="main">
        <div className="main__video-details">
          <MainVideoInfo mainVideoDetails={mainVideoDetails} newCommentHandler={newCommentHandler} />
          <CommentContainer mainVideoDetails={mainVideoDetails} deleteCommentHandler={deleteCommentHandler} />
        </div>
          {/* pass down video id to compare with ids of side videos */}
          <SideVideoContainer videoId={mainVideoDetails.id}/>
      </div>
    );
  }
  
export default Main;
