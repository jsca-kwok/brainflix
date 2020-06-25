import React from 'react';
import MainVideoInfo from '../MainVideoInfo/MainVideoInfo';
import CommentContainer from '../CommentContainer/CommentContainer';
import SideVideoContainer from '../SideVideoContainer/SideVideoContainer';
import './Main.scss';

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
