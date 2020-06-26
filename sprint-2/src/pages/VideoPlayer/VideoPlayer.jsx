import React from 'react';
import Axios from 'axios';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Main from '../../components/Main/Main';

const url = 'https://project-2-api.herokuapp.com/videos';
const api_key = "?api_key=ad801a84-f2da-43c8-99dd-5c8729f89d8e";
const defaultVideoId = "/1af0jruup5gu";

class VideoPlayer extends React.Component {

  state={showcaseVid: []};

  // seed
  componentDidMount() {
    Axios
    .get(`${url}${defaultVideoId}${api_key}`)
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
      .get(`${url}${defaultVideoId}${api_key}`)
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
      .get(`${url}/${this.props.match.params.id}${api_key}`)
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
    .post(`${url}/${videoId}/comments${api_key}`,
    {
      name: 'Mohan Muruge',
      comment: e.target.comment.value
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
    .delete(`${url}/${videoId}/comments/${commentId}${api_key}`)
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

  render() {
    return (
      <div>
        <Header />
        <Hero 
          src={this.state.showcaseVid.video+api_key} 
          poster={this.state.showcaseVid.image} 
          duration={this.state.showcaseVid.duration} />
        {/* only render <Main> component if comments array is not undefined (i.e. state has been seeded) */}
        {
          this.state.showcaseVid.comments !== undefined ? <Main mainVideoDetails={this.state.showcaseVid} newCommentHandler={this.postNewComment} deleteCommentHandler={this.deleteComment}/> : null
        }
      </div>
    );
  }
}

export default VideoPlayer;
