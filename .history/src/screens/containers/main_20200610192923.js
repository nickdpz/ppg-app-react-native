import React, { Component } from 'react';
import { connect } from 'react-redux';


class Main extends Component {
  componentDidMount() {

  }
  render() {
    return (
    )
  }
}

function mapStateToProps(state) {
  return {
    movie: state.selectedMovie
  }
}

export default connect(mapStateToProps)(Movie)