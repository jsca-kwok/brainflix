import React from 'react';
import './comment-input.scss';

const CommentInput = (props) => {
    return (
        <div className="comment">
            <p className="comment__count">{props.commentCount} Comments</p>
            <div className="comment__input-container">
                <div className="comment__image-container">
                    <div className="comment__image comment__image-true" alt="profile picture"></div>
                </div>
                <form className="comment__form">
                    <h3 className="comment__heading">JOIN THE CONVERSATION</h3>
                    <div className="comment__form-container">
                        <textarea className="comment__input" type="text" placeholder="That was easily the most spectacular BMX moment ever."></textarea>
                        <button className="comment__button" type="button">COMMENT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CommentInput;

