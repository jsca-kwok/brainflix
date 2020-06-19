import React from 'react';
import CommentCard from '../comment-card/CommentCard';
import '../comment-container/comment-container.scss';

const CommentContainer = (props) => {
    return (
        <div className="comment__container">
            {   
                props.mainVideo.comments.map((item) => { 
                    return (
                        <CommentCard name={item.name} timestamp={item.timestamp} comment={item.comment} key={item.id} />
                    ) 
                })
            }    
        </div>
    )
}

export default CommentContainer;