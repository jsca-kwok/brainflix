import React from 'react';
import './timestamp.scss';

const Timestamp = (props) => {
    let commentTime = props.timestamp;
    let secondsDiff = (Date.now()/1000 - commentTime);
    switch (true) {
        case secondsDiff > 3153600:
            let years = Math.floor(secondsDiff/31536000);
            let months = Math.floor((secondsDiff % 31536000) / 2592000);
            return <p className="main-video__timestamp">{years} year and {months} months ago</p>;
        case secondsDiff > 2592000:
            months = Math.floor(secondsDiff / 2592000);
            let weeks = Math.floor((secondsDiff % 2592000) / 604800);
            return <p className="main-video__timestamp">{months} months and {weeks} weeks ago</p>;
        case secondsDiff > 604800:
            weeks = Math.floor(secondsDiff / 604800);
            let days = Math.floor((secondsDiff % 604800) / 86400);
            return <p className="main-video__timestamp">{weeks} weeks and {days} days ago</p>;
        case secondsDiff > 3600:
            let hours = Math.floor(secondsDiff / 3600);
            let minutes = Math.floor((secondsDiff % 3600) / 60);
            return <p className="main-video__timestamp">{hours} hours and {minutes} minutes ago</p>;
        case secondsDiff > 60:
            minutes = Math.floor(secondsDiff / 60);
            return <p className="main-video__timestamp">{minutes} minutes ago</p>
        default:
            return <p className="main-video__timetamp">{secondsDiff} seconds ago</p>
    }
}

export default Timestamp;