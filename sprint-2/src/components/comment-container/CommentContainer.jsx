import React from 'react';
import CommentCard from '../comment-card/CommentCard';
import '../comment-container/comment-container.scss';

const CommentContainer = ({mainVideoDetails}) => {
    return (
        <div className="comment__container">
            {   
                mainVideoDetails.comments
                // sort comments to display most recent on top
                .sort((a, b) => { return b.timestamp - a.timestamp })
                // map to render each comment
                .map((item) => { 
                    return (
                        <CommentCard name={item.name} timestamp={item.timestamp} comment={item.comment} key={item.id} />
                    ) 
                })
            }    
        </div>
    )
}

export default CommentContainer;