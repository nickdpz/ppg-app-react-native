import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Text,
  } from 'react-native';

class Main extends Component {
  componentDidMount() {

  }
  render() {
    return (
        <>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic">
            <Text>Hola2</Text>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    movie: state.selectedMovie
  }
}

export default connect(mapStateToProps)(Main)