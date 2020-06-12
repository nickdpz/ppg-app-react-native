import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from './screens/containers/home';
import Main from './screens/containers/main';


class AppLayout extends Component {
  render() {
    if (this.props.selectedMovie) {
      return <Main />
    }
    return (<Home/>)
  }
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie,
  }
}

export default connect(mapStateToProps)(AppLayout);