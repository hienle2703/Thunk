/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Test from './screens/Test';
//Redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {reducers} from "./redux/reducers/index"

const store = createStore(reducers, applyMiddleware(thunk));
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Test />
      </Provider>
    </>
  );
};

export default App;
