import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from './screens/containers/home';
import Main from './screens/containers/main';
import Register from './screens/containers/register';


class AppLayout extends Component {
  render() {
    if (this.props.user) {
      return <Main />
    }else{
      return <Register/>
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(AppLayout);