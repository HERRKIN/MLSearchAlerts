/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View
} from 'react-native';

export default class inicio extends Component {
  render() {
    return (
      <ScrollView>
  <Image source={{uri: 'https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAdjAAAAJDk1MDdjNWNkLWZlNzItNGRiYy1iMDY0LTM4OWFlN2VhYjEzNQ.jpg'}} style={{width: 100, height: 100}} />
  <Text>
    Probando React Native, con una imagen de saecosoft en android:D
    a ver que tal funciona con el cel. 
  </Text>
</ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('inicio', () => inicio);
