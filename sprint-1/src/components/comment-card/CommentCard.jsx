import React from 'react';
import '../comment-card/comment-card.scss';

class CommentCard extends React.Component {
    render() {
        return (
            <div className="comment__card">
                <div className="comment__image-container">
                    <div className="comment__image comment__image-false"></div>
                </div>
                <div className="comment__text-container">
                    <div className="comment__heading-container">
                        <p className="comment__name">Michael Lyons</p>
                        <p className="comment__timestamp">12/18/2018</p>
                    </div>
                    <p className="comment__description">
                        They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.
                    </p>
                </div>
            </div>
        )
    }
}

export default CommentCard;