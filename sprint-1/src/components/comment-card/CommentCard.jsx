import React from 'react';
import '../comment-card/comment-card.scss';

const CommentCard = (props) => {
    return (
        <div className="comment__card">
            <div className="comment__image-container">
                <div className="comment__image comment__image-false"></div>
            </div>
            <div className="comment__text-container">
                <div className="comment__heading-container">
                    <p className="comment__name">{props.name}</p>
                    <p className="comment__timestamp">{props.timestamp}</p>
                </div>
                <p className="comment__description">
                    {props.comment}
                </p>
            </div>
        </div>
    )
}

export default CommentCard;