import React from 'react';
import CommentCard from '../comment-card/CommentCard';
import '../comment-container/comment-container.scss';

class CommentContainer extends React.Component {
    render() {
        return (
            <div className="comment__container">
                <CommentCard />
                <CommentCard />
            </div>
        )
    }
}

export default CommentContainer;