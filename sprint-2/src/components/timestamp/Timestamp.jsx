import React from 'react';
import './Timestamp.scss';

const Timestamp = ({timestamp}) => {
    let commentTime = timestamp;
    let secondsDiff = ((Date.now() - commentTime)/1000);
    let years;
    let months;
    let weeks;
    let days;
    let hours;
    let minutes;
    let seconds;
    switch (true) {
        case secondsDiff > 3153600:
            years = Math.floor(secondsDiff/31536000);
            months = Math.floor((secondsDiff % 31536000) / 2592000);
            return <p className="main-video__timestamp">{years} year and {months} months ago</p>;
        case secondsDiff > 2592000:
            months = Math.floor(secondsDiff / 2592000);
            weeks = Math.floor((secondsDiff % 2592000) / 604800);
            return <p className="main-video__timestamp">{months} months and {weeks} weeks ago</p>;
        case secondsDiff > 604800:
            weeks = Math.floor(secondsDiff / 604800);
            days = Math.floor((secondsDiff % 604800) / 86400);
            return <p className="main-video__timestamp">{weeks} weeks and {days} days ago</p>;
        case secondsDiff > 3600:
            hours = Math.floor(secondsDiff / 3600);
            minutes = Math.floor((secondsDiff % 3600) / 60);
            return <p className="main-video__timestamp">{hours} hours and {minutes} minutes ago</p>;
        case secondsDiff > 60:
            minutes = Math.floor(secondsDiff / 60);
            return <p className="main-video__timestamp">{minutes} minutes ago</p>
        default:
            seconds = Math.floor(secondsDiff);
            return <p className="main-video__timestamp">{seconds} seconds ago</p>
    }
}

export default Timestamp;