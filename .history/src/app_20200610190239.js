import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { connect } from 'react-redux';


import Home from './screens/containers/home';
import Header from './sections/components/header';

class AppLayout extends Component {
  async componentDidMount() {
    const categoryList = await API.getMovies();
    console.log('Esta es la lista de categorías')
    console.table(categoryList);
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
    const suggestionList = await API.getSuggestion(10);
    this.props.dispatch({
      type: 'SET_SEGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }
  render() {
    if (this.props.selectedMovie) {
      return <Movie />
    }
    return (
      <Home>
        <Header />
        <Search />
        <CategoryList />
        <SuggestionList />
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