import React, {Component} from 'react';
import AppNavigator from './navigation';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import { Provider, connect } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import appReducer from './redux';
//Firebase module for Database
//import firebase from 'firebase';
//import 'firebase/firestore';
//import config from './static/static__firebase-config';
// Store connect for redux manage

const store = createStore(
    appReducer,
    applyMiddleware(ReduxThunk, logger)
);

export default class App extends React.Component {
  
  componentWillMount(){
    // if(!firebase.apps.length) {
    //   const data = firebase.initializeApp(config);
    //   const firestore = firebase.firestore();
    //   firestore.settings({
    //     timestampsInSnapshots: true
    //   });
    // }else {
    //   firebase.app();
    //   console.log('firebase.app():', firebase.apps.length);
    // }
  }

  render() {
    return (
    	<Provider store={store}>
      	<AppNavigator/>
      </Provider>
    );
  }
}