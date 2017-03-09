import React from 'react';
import { fetchSubreddits } from './lib/util';
import { SubredditTable } from './components';

class App extends React.Component {
  state = {
    subreddits: [],
    errors: []
  };

  componentDidMount() {
    this.retrieveSubreddits();
  }

  retrieveSubreddits() {
    fetchSubreddits(this.receiveResults, this.receiveErrors);
  }

  receiveResults = (subreddits) => {
    this.setState({subreddits});
  }

  receiveErrors = (errors) => {
    this.setState({errors});
  }

  render() {
    return (
      <div className="App">
        <h2 className="table-title">ReactJS Subreddits</h2>
        <SubredditTable subreddits={this.state.subreddits}/>
      </div>
    );
  }
}

export default App;
