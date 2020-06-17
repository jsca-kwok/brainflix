import React from 'react';
import '../side-video-container/side-video-container.scss';
import SideVideo from '../side-video/SideVideo';

class SideVideoContainer extends React.Component {
    render() {
        return (
            <div className="side-container">
                <p className="side-container__next">NEXT VIDEO</p>
                <SideVideo />
                <SideVideo />
            </div>
        )
    }
}

export default SideVideoContainer;