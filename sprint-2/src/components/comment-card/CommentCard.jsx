import React from 'react';
import '../comment-card/comment-card.scss';
import Timestamp from '../timestamp/Timestamp';

const CommentCard = ({name, timestamp, comment}) => {
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
            </div>
        </div>
    )
}

export default CommentCard;