import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Main from './components/main/Main';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Main />
      </div>
    );
  }
}

export default App;
