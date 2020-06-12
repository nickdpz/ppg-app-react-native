import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from './screens/containers/home';
import Main from './screens/containers/main';


class AppLayout extends Component {
  render() {
    if (this.props.user) {
      return <Main />
    }
    return <Home/>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(AppLayout);