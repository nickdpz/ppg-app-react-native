import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from './screens/main';
import Register from './screens/register';


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