import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import '../side-video-container/side-video-container.scss';
import SideVideo from '../side-video/SideVideo';

const url = 'https://project-2-api.herokuapp.com/';
const api_key = "?api_key=bf361905-c793-4e92-b572-59f0a1f4735a";
const videos = 'videos'

class SideVideoContainer extends React.Component {

  state = {nextVideos: []};

  componentDidMount() {
    Axios
    .get(url + videos + api_key)
    .then(res => {
      this.setState({nextVideos: res.data})
    })
  }

  render() {
    return (
      <div className="side-container">
          <p className="side-container__next">NEXT VIDEO</p>
          {
              this.state.nextVideos.map((item) => {
                  return (
                      <Link to={`/videos/${item.id}`} key={item.id}>
                          <SideVideo title={item.title} channel={item.channel} image={item.image} id={item.id}/>
                      </Link>
                  )
              })
          }
      </div>
    )
  }
}

export default SideVideoContainer;