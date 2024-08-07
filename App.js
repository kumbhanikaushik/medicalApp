import {Alert, LogBox, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import MainNavigation from './scr/navigator/MainNavigation';
import { persistor, store } from './scr/store';
import { Provider } from 'react-redux';

const App = () => {

LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
};Alert

export default App;

const styles = StyleSheet.create({});
