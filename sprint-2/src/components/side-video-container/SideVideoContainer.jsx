import React from 'react';
import { Link } from 'react-router-dom';
import '../side-video-container/side-video-container.scss';
import SideVideo from '../side-video/SideVideo';

const SideVideoContainer = (props) => {
    return (
        <div className="side-container">
            <p className="side-container__next">NEXT VIDEO</p>
            {
                props.sideVideos.map((item) => {
                    return (
                        <Link to={`/${item.id}`} key={item.id}>
                            <SideVideo title={item.title} channel={item.channel} image={item.image} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default SideVideoContainer;