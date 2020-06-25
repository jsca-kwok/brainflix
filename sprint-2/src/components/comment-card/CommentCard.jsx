import React from 'react';
import '../comment-card/comment-card.scss';
import Timestamp from '../timestamp/Timestamp';

const CommentCard = ({name, timestamp, comment, deleteCommentHandler, deleteVideoId, deleteCommentId}) => {
    return (
        <div className="comment__card">
            <div className="comment__image-container">
                <div className="comment__image comment__image-default"></div>
            </div>
            <div className="comment__text-container">
                <div className="comment__heading-container">
                    <p className="comment__name">{name}</p>
                    <Timestamp timestamp={timestamp}/>
                </div>
                <p className="comment__description">
                    {comment}
                </p>
                {/* only show delete icon if comment belongs to current user  */}
                {
                    name === 'Mohan Muruge' ? <img onClick={() => {deleteCommentHandler(deleteVideoId, deleteCommentId)}} className="comment__delete" src="/assets/icons/delete.svg" alt="delete" /> : null
                }
            </div>
        </div>
    )
}

export default CommentCard;