import React from 'react';
import Axios from 'axios';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import Main from '../../components/main/Main';

const url = 'https://project-2-api.herokuapp.com/';
const api_key = "?api_key=bf361905-c793-4e92-b572-59f0a1f4735a";
const defaultVideoId = "/1af0jruup5gu";
const videos = 'videos'

class VideoPlayer extends React.Component {

  state={showcaseVid: []};

  componentDidMount() {
    Axios
    .get(url + videos + defaultVideoId + api_key)
    .then(res => {
      this.setState({showcaseVid: res.data})
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Hero src={this.state.showcaseVid.video+api_key} poster={this.state.showcaseVid.image} duration={this.state.showcaseVid.duration} />
        {
          this.state.showcaseVid.comments !== undefined ? <Main mainVideoDetails={this.state.showcaseVid} /> : console.log('still undefined')
        }
      </div>
    );
  }
}

export default VideoPlayer;
