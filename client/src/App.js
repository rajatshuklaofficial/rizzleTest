import React ,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Landing from './component/layout/Landing';
class App extends Component {
  render(){
  return (
    <Router>
      <Route exact path="/" component={Landing} />
    </Router>
  );
 }
}

export default App;
