import React from 'react';
import { Link } from 'react-router-dom';
import '../SideVideoContainer/side-video-container.scss';
import SideVideo from '../SideVideo/SideVideo';

const SideVideoContainer = ({ videoId, nextVideos }) => {
  return (
    <div className="side-container">
        <p className="side-container__next">NEXT VIDEO</p>
        {
            // filter out current video from side video list
            nextVideos.filter((item) => {
              return videoId !== item.id
            // map each of the leftover videos to display on page as a link
            }).map((item) => {
                return (
                    <Link to={`/videos/${item.id}`} key={item.id}>
                        <SideVideo 
                          title={item.title} 
                          channel={item.channel} 
                          image={item.image} 
                          id={item.id}/>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default SideVideoContainer;