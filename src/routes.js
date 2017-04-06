import React, { Component } from 'react';
import { Router, Route, hashHistory  } from 'react-router';
import HomePage from './homePage';



class Routes extends Component {

  constructor(props) {
    super(props);
   
  }

  componentWillMount() {
   

  }

  verifyToken(token) {
   
  }

  handleNavigation(currentFilters) {
   
  }

  render() {
    return (<Router history={hashHistory} filters={filterOptions}>
              <Route path="/Home" component={HomePage}>
                <Route path="/Sample" onRouteChange={this.verifyToken}
                                                  onNavigation={this.handleNavigation}
                                                  token={token}
                                                  userName={userName}
                                                  component={SampleComponent} />
                

              </Route>
            </Router>
    );
  }
}

export default Routes;
