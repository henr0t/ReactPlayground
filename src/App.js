import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { News } from './News';
import { NoMatch } from './NoMatch';
import Navbar from './components/CustomNavbar';
import { Layout } from './components/Layout';
import { Jumbotron } from './components/Jumbotron';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Jumbotron/>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/news" component={News} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
