import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/about'>about</Link></li>
            <li><Link to='/topic'>topic</Link></li>
          </ul>
          <hr/>

          <Route exact path='/' render={() => <h2>Home</h2>}/>
          <Route path='/about' render={() => <h2>About</h2>}/>
          <Route path='/topic' component={this.Topics} />
        </div>
      </Router>
    );
  }
  Topics = ({ match }) => {
    console.log(match);
    return (
        <div>
          <h2>Topics</h2>
          <ul>
            <li><Link to={`${match.url}/rendring`}>rendring</Link></li>
            <li><Link to={`${match.url}/component`}>component</Link></li>
            <li><Link to={`${match.url}/props`}>props</Link></li>
          </ul>
          <Route path={`${match.url}/:topicId`} component={this.Topic}/>
          <Route exact path={`${match.url}`} render={()=> <div>please Select a topic</div>}/>
        </div>
    )
  }
  Topic = ({ match }) => {
    console.log(match);
    return(
        <div>{match.params.topicId}</div>
    )
  }
}

export default App;
