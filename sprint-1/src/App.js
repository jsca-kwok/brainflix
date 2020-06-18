import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Main from './components/main/Main';
import data from './data.json';

console.log({data});
class App extends React.Component {
  state = {data};

  render() {
    return (
      <div className="App">
        <Header />
        <Hero src={this.state.data[1][0].video} poster={this.state.data[1][0].image} />
        <Main mainVideo={this.state.data[1][0]} sideVideos={this.state.data[0]} />
      </div>
    );
  }
}

export default App;
