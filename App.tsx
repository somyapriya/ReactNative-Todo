/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Dashboard from './components/Dashboard/Dashboard';



const App = () => {
  return (
    <SafeAreaView style={{flex: 1,}}>
      <StatusBar backgroundColor={Colors.darker} />
      <Dashboard />
    </SafeAreaView>
  );
};



export default App;
