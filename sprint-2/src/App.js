import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Main from './components/main/Main';
import data from './data.json';

class App extends React.Component {
  state = {data};

  render() {
    return (
      <div className="App">
        <Header />
        <Hero src={process.env.PUBLIC_URL + this.state.data[1][0].video} poster={process.env.PUBLIC_URL + this.state.data[1][0].image} duration={this.state.data[1][0].duration} />
        <Main mainVideo={this.state.data[1][0]} sideVideos={this.state.data[0]} />
      </div>
    );
  }
}

export default App;
