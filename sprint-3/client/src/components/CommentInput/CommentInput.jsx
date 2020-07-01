import React from 'react';
import './comment-input.scss';

const CommentInput = ({commentCount, newCommentHandler, videoId}) => {
    return (
        <div className="comment">
            <p className="comment__count">{commentCount} Comments</p>
            <div className="comment__input-container">
                <div className="comment__image-container">
                    <div className="comment__image comment__image-user-input" alt="profile picture"></div>
                </div>
                <form onSubmit={(e) => {newCommentHandler(e, videoId)}} className="comment__form">
                    <h3 className="comment__heading">JOIN THE CONVERSATION</h3>
                    <div className="comment__form-container">
                        <textarea className="comment__input" required type="text" name="comment" placeholder="That was easily the most spectacular BMX moment ever."></textarea>
                        <button className="comment__button">COMMENT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CommentInput;

