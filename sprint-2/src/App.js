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
          <Route path="/" exact component={VideoPlayer} />
          <Route path="/upload" component={Upload} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
