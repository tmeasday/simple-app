import React, { Component } from 'react';
import logo from './logo.svg';

import A from './components/A';
import AWrap from './components/AWrap';
import B from './components/B';
import Star from './components/Star';

import './App.css';

// Unsaveable because we can't serialize arbitrary classes
class Thing {}

class App extends Component {
  constructor() {
    super();
    this.state = { numberOfAs: 1 };
    setTimeout(() => {
      this.setState({ numberOfAs: 2 });
    }, 1000);
  }

  render() {
    return (
      <div>
        {Array(this.state.numberOfAs).fill().map((_, n) =>
          <A title={n} key={n}>
            <B />
          </A>
        )}
        <A key="unsaveable" thing={new Thing} />
        <A>
          <B>
            <div/>
            text
            <span/>
          </B>
        </A>
        <A thing={() => 0} />
        <AWrap />
        <Star/>
        <p><a onClick={() => this.setState({ numberOfAs: this.state.numberOfAs - 1})}>REMOVE A</a></p>
        <p><a onClick={() => this.setState({ numberOfAs: this.state.numberOfAs + 1})}>ADD A</a></p>
      </div>
    );
  }
}

export default App;
