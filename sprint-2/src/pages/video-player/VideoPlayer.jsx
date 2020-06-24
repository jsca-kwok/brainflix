import React from 'react';
import Axios from 'axios';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import Main from '../../components/main/Main';

const url = 'https://project-2-api.herokuapp.com/';
const api_key = "?api_key=bf361905-c793-4e92-b572-59f0a1f4735a";
const defaultVideoId = "/1af0jruup5gu";

class VideoPlayer extends React.Component {

  state={showcaseVid: []};

  // seed
  componentDidMount() {
    Axios
    .get(`${url}videos${defaultVideoId}${api_key}`)
    .then(res => {
      this.setState({showcaseVid: res.data})
    })
    .catch(err => console.error(err))
  }

  // to update main video displayed
  componentDidUpdate(prevProps) {
    // if on root path (no id param), display default video - added && condition to prevent infinite looping
    if (!this.props.match.params.id && (this.props.match.params.id !== prevProps.match.params.id)) {
      Axios
      .get(`${url}videos${defaultVideoId}${api_key}`)
      .then(res => {
        this.setState({showcaseVid: res.data})
      })
      .catch(err => console.error(err))
    }
    // if current path is different than previous path, update state with new video info
    else if (this.props.match.params.id !== prevProps.match.params.id) {
      Axios
      .get(`${url}videos/${this.props.match.params.id}${api_key}`)
      .then(res => {
        this.setState({showcaseVid: res.data});
      }) 
      .catch(err => console.error(err))
    } 
  }

  postNewComment = (e, videoId) => {
    e.preventDefault();
    console.log('clicked')
    Axios
    .post(`${url}videos/${videoId.videoId}/comments${api_key}`,
    {
      name: 'Mohan Muruge',
      comment: e.target.comment.value
    })
    .then(res => {
      this.setState({showcaseVid: [...this.state.showcaseVid, res.data]})
    })
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <Header />
        <Hero src={this.state.showcaseVid.video+api_key} poster={this.state.showcaseVid.image} duration={this.state.showcaseVid.duration} />
        {/* only render <Main> component if comments array is not undefined (i.e. state has been seeded) */}
        {
          this.state.showcaseVid.comments !== undefined ? <Main mainVideoDetails={this.state.showcaseVid} newCommentHandler={this.postNewComment} /> : null
        }
      </div>
    );
  }
}

export default VideoPlayer;
