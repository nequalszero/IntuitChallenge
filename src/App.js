import React from 'react';
import { fetchSubreddits } from './lib/util';
import { SubredditTable, LoadingBar } from './components';

// Top level application component.
class App extends React.Component {
  state = {
    subreddits: [],
    errors: "",
    loading: false
  };

  // Make API call after App component has mounted.
  componentDidMount() {
    this.retrieveSubreddits();
    this.setState({loading: true, subreddits: [], errors: ""});
  }

  // Returns true if an API call is not in progress and no errors were received.
  resultsAvailable() {
    return (!this.state.loading && this.state.errors.length == 0);
  }

  // Makes API call for ReactJS subreddits.
  retrieveSubreddits = () => {
    fetchSubreddits(this.receiveResults, this.receiveErrors);
    this.setState({loading: true, errors: ""})
  }

  // Success callback for API call, updating the App component state with the
  //  received ReactJS subreddits.
  receiveResults = (subreddits) => {
    this.setState({subreddits, loading: false, errors: ""});
  }

  // Error callback for API call, updating the App component state with the
  //  received errors.
  receiveErrors = (errors) => {
    this.setState({errors: errors.toString(), loading: false});
  }

  render() {
    return (
      <div className="App">
        <LoadingBar loading={this.state.loading}
          errors={this.state.errors}
          handleButtonClick={this.retrieveSubreddits}/>
        <h1>ReactJS Subreddits</h1>
        {this.resultsAvailable() && <SubredditTable subreddits={this.state.subreddits}/>}
      </div>
    );
  }
}

export default App;
