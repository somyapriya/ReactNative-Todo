import React from 'react';

import {
  SafeAreaView,
  StatusBar,
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
