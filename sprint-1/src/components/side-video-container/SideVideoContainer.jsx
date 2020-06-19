import React from 'react';
import '../side-video-container/side-video-container.scss';
import SideVideo from '../side-video/SideVideo';

const SideVideoContainer = (props) => {
    return (
        <div className="side-container">
            <p className="side-container__next">NEXT VIDEO</p>
            {
                props.sideVideos.map((item) => {
                    return (
                        <SideVideo title={item.title} channel={item.channel} image={item.image} key={item.id} />
                    )
                })
            }
        </div>
    )
}

export default SideVideoContainer;