import React from 'react';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Main from '../../components/Main/Main';

const server = 'http://localhost:8080/videos'
const api_key = "?api_key=ad801a84-f2da-43c8-99dd-5c8729f89d8e";
const defaultVideoId = "/1af0jruup5gu";

class VideoPlayer extends React.Component {

  state={showcaseVid: []};

  // seed
  componentDidMount() {
    Axios
    .get(`${server}${defaultVideoId}`)
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
      .get(`${server}${defaultVideoId}`)
      .then(res => {
        this.setState({showcaseVid: res.data})
        // scroll to top
        window.scrollTo(0,0);
      })
      .catch(err => console.error(err))
    }
    // if current path is different than previous path, update state with new video info
    else if (this.props.match.params.id !== prevProps.match.params.id) {
      Axios
      .get(`${server}/${this.props.match.params.id}`)
      .then(res => {
        this.setState({showcaseVid: res.data});
        window.scrollTo(0,0);
      }) 
      .catch(err => console.error(err))
    } 
  }

  postNewComment = (e, videoId) => {
    e.preventDefault();
    Axios
    .post(`${server}/${videoId}/comments`,
    {
      name: 'Mohan Muruge',
      comment: e.target.comment.value,
      id: uuidv4(),
      likes: 0,
      timestamp: Date.now()
    })
    .then(res => {
      // make a copy of the current state to prevent direct changes to state
      const postCommentCopyState = {...this.state.showcaseVid};
      // push new comment response into state copy
      postCommentCopyState.comments.push(res.data);
      // setState with modified copy of state 
      this.setState({showcaseVid: postCommentCopyState});
    })
    .catch(err => console.error(err))
    // clear input field
    e.target.reset();
  }

  deleteComment = (videoId, commentId) => {
    Axios
    .delete(`${server}/${videoId}/comments/${commentId}`)
    .then(() => {
      // make a copy of the current state to prevent direct changes to state
      const deleteCommentCopyState = {...this.state.showcaseVid};
      // create new comment array without deleted comment via filtering by id
      const removedCommentArray = deleteCommentCopyState.comments.filter(comment => comment.id !== commentId);
      // replace comments array in state copy with filtered array
      deleteCommentCopyState.comments = removedCommentArray;
      // set state with modified copy of state
      this.setState({showcaseVid: deleteCommentCopyState});
    })
    .catch(err => console.error(err))
  }

  likeVideo = (videoId) => {
    Axios
    .put(`${server}/${videoId}/likes`)
    .then(() => {
      if (this.state.showcaseVid.liked === false) {
        console.log(this.state.liked);
        const likeVideoCopyState = {...this.state.showcaseVid};
        let likes = parseInt(likeVideoCopyState.likes);
        likes++;
        likeVideoCopyState.likes = likes;
        likeVideoCopyState.liked = true;
        this.setState({showcaseVid: likeVideoCopyState});
      } else {
        console.log(this.state.showcaseVid.liked);
        const likeVideoCopyState = {...this.state.showcaseVid};
        let likes = parseInt(likeVideoCopyState.likes);
        likes--;
        likeVideoCopyState.likes = likes;
        likeVideoCopyState.liked = false;
        this.setState({showcaseVid: likeVideoCopyState});
      }
    })
  }

  // to toggle play/pause button on video
  playState = (status) => {
    const playVideoCopyState = {...this.state.showcaseVid};
    playVideoCopyState.playing = status;
    this.setState({showcaseVid: playVideoCopyState});
  }

  render() {
    return (
      <div>
        <Header />
        <Hero 
          src={this.state.showcaseVid.video+api_key} 
          poster={this.state.showcaseVid.image} 
          duration={this.state.showcaseVid.duration}
          playing={this.state.showcaseVid.playing}
          playState={this.playState} />
        {/* only render <Main> component if comments array is not undefined (i.e. state has been seeded) */}
        {
          this.state.showcaseVid.comments !== undefined ? <Main mainVideoDetails={this.state.showcaseVid} newCommentHandler={this.postNewComment} deleteCommentHandler={this.deleteComment} likeVideo={this.likeVideo} /> : null
        }
      </div>
    );
  }
}

export default VideoPlayer;
