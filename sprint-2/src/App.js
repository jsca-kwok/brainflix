import React from 'react';
import data from './data.json';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VideoPlayer from './pages/video-player/VideoPlayer';
import Upload from './pages/upload/Upload';

class App extends React.Component {
  state = {data};

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route 
            path="/" exact 
            render={
              (routeProps) => {
                return (
                  <VideoPlayer 
                    src={process.env.PUBLIC_URL + this.state.data[1][0].video} 
                    poster={process.env.PUBLIC_URL + this.state.data[1][0].image} 
                    duration={this.state.data[1][0].duration} 
                    mainVideo={this.state.data[1][0]} 
                    sideVideos={this.state.data[0]}{...routeProps} 
                  />
                )
              }
            } 
          />
          <Route path="/upload" component={Upload} />
          <Route 
            path="/:id"
            render={
              (routeProps) => {
                // need to update the prop values for specific side video to be rendered
                return (
                  <VideoPlayer 
                    src={process.env.PUBLIC_URL + this.state.data[1][0].video} 
                    poster={process.env.PUBLIC_URL + this.state.data[1][0].image} 
                    duration={this.state.data[1][0].duration} 
                    mainVideo={this.state.data[1][0]} 
                    sideVideos={this.state.data[0]}{...routeProps} 
                  />
                )
              }
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
