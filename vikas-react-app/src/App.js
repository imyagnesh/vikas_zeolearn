import React, { Component, StrictMode } from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import NoMatch from './Screens/NoMatch';
import Header from './Components/Header';
import Footer from './Components/Footer';
// import Todos from './Todos';

const HomeAsync = loadable(() => import('./Screens/Home'), {
  fallback: <div>Loading...</div>,
});
const UsersAsync = loadable(() => import('./Screens/Users'), {
  fallback: <div>Loading...</div>,
});
const AboutAsync = loadable(() => import('./Screens/About'), {
  fallback: <div>Loading...</div>,
});

export default class App extends Component {
  static propTypes = {
    // prop: PropTypes,
  };

  state = {
    // text: 'get milk',
  };

  // state = {
  //   a: 1,
  //   greet: this.props.text,
  //   show: false
  // };

  // constructor(props) {
  //   super(props);
  //   const b = 1;
  //   this.state = {
  //     a: 1,
  //     greet: `${props.text}${b}`
  //   };
  // }

  // static getDerivedStateFromProps(props, state) {
  //   const b = 1;
  //   return { ...state, greet: `${props.text}${b}` };
  // }

  render() {
    // const { a, greet, show } = this.state;

    return (
      <StrictMode>
        <Router>
          <div
            style={{
              height: '100vh',
              flex: 1,
              flexDirection: 'column',
              display: 'flex',
            }}
          >
            <Header />
            <main style={{ flex: 1 }}>
              <Switch>
                <Route path="/" exact component={HomeAsync} />
                <Route path="/about/" component={AboutAsync} />
                <Route path="/users/" component={UsersAsync} />
                <Route component={NoMatch} />
              </Switch>
            </main>
            <Footer />
          </div>
        </Router>
      </StrictMode>
    );
  }
}
