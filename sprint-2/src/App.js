import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
import Upload from './pages/Upload/Upload';


const App = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={VideoPlayer}/>
          <Route path="/upload" component={Upload} />
          <Route path="/videos/:id" component={VideoPlayer} />
        </Switch>
      </BrowserRouter>
    );
}

export default App;
