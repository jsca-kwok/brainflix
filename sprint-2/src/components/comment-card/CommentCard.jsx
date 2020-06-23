import React from 'react';
import '../comment-card/comment-card.scss';
import Timestamp from '../timestamp/Timestamp';

const CommentCard = (props) => {
    return (
        <div className="comment__card">
            <div className="comment__image-container">
                <div className="comment__image comment__image-default"></div>
            </div>
            <div className="comment__text-container">
                <div className="comment__heading-container">
                    <p className="comment__name">{props.name}</p>
                    <Timestamp timestamp={props.timestamp}/>
                </div>
                <p className="comment__description">
                    {props.comment}
                </p>
            </div>
        </div>
    )
}

export default CommentCard;