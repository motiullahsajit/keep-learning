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
} from 'react-native';
import HomeDataLoad from './src/components/HomePage/HomeDataLoad';


const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <HomeDataLoad />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
}
});

export default App;
