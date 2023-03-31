
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchPosts} from '../action/posts'

 class App extends React.Component {

  componentDidMount(){
    this.props.dispatch(fetchPosts())
  }

  render() {
   
    return <div>App</div>  ;
  }
}


function mapStateToProps (state){
  return{
    posts:state.posts
  }
}


export default connect(mapStateToProps)(App);
