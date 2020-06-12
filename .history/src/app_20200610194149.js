import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from './screens/containers/home';
import Header from './sections/components/header';

class AppLayout extends Component {
  render() {
    if (this.props.selectedMovie) {
      return <Movie />
    }
    return (<Home7/>)
  }
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie,
  }
}

export default connect(mapStateToProps)(AppLayout);