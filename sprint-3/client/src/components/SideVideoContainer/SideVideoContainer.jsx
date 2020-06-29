import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import '../SideVideoContainer/side-video-container.scss';
import SideVideo from '../SideVideo/SideVideo';

const url = 'http://localhost:8080/videos';

class SideVideoContainer extends React.Component {

  state = {nextVideos: []};

  // seed 
  componentDidMount() {
    Axios
    .get(url)
    .then(res => {
      this.setState({nextVideos: res.data})
    })
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="side-container">
          <p className="side-container__next">NEXT VIDEO</p>
          {
              // filter out current video from side video list
              this.state.nextVideos.filter((item) => {
                return this.props.videoId !== item.id
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
}

export default SideVideoContainer;