import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VideoPlayer from './pages/video-player/VideoPlayer';
import Upload from './pages/upload/Upload';


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route 
            path="/" exact 
            render={
              (routeProps) => {
                return (
                  <VideoPlayer />
                )
              }
            } 
          />
          <Route path="/upload" component={Upload} />
          <Route 
            path=":id"
            render={
              (routeProps) => {
                return (
                  <VideoPlayer />
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
