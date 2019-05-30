/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, StatusBar, Image, ImageBackground} from 'react-native';



export default class App extends Component {
  render() {
    return (
      
      <ImageBackground style={styles.container}
             source={require('./assets/splash-bg.png')}
           >
         <StatusBar backgroundColor="#f65433" barStyle="light-content" />    
      <Image source={require('./assets/logo.png')}/>
     
           </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    color:'orange'
  },
  SplashLogo: {
    margin:'auto'
  },

});
