import React from 'react';
import likesIcon from '../../assets/icons/svg/icon-likes.svg';
import likedIcon from '../../assets/icons/png/liked-icon.png';

const Likes = ({likes, likeVideo, videoId}) => {
    // format number of likes with comma
    const formattedLikes = parseInt(likes).toLocaleString();

    // change color of like
    const changeColor = (e) => {
        e.target.src = likedIcon;
    }

    return (
        <>
        <img onClick={(e) => {likeVideo(videoId); changeColor(e)}} className="main-video__likes-icon" src={likesIcon} alt="likes" />
        <p>{formattedLikes}</p>
        </>
    )
}

export default Likes;