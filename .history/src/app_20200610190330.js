import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { connect } from 'react-redux';


import Home from './screens/containers/home';
import Header from './sections/components/header';

class AppLayout extends Component {
  async componentDidMount() {
  }
  render() {
    return (
      <Home>
        <Header />
      </Home>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie,
  }
}

export default connect(mapStateToProps)(AppLayout);