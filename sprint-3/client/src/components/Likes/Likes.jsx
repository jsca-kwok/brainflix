import React from 'react';
import likesIcon from '../../assets/icons/svg/icon-likes.svg';
import likedIcon from '../../assets/icons/png/liked-icon.png';

const Likes = ({likes, likeVideo, videoId, liked}) => {
    // format number of likes with comma
    const formattedLikes = parseInt(likes).toLocaleString();

    return (
        <>
        {/* render either liked or like icon based on video liked state */}
        {
            liked === false ? <img onClick={(e) => {likeVideo(videoId)}} className="main-video__likes-icon" src={likesIcon} alt="likes" /> : <img onClick={(e) => {likeVideo(videoId)}} className="main-video__liked-icon" src={likedIcon} alt="liked" />
        }
        <p>{formattedLikes}</p>
        </>
    )
}

export default Likes;