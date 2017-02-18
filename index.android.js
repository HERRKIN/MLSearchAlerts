/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Button,
  View
} from 'react-native'

export default class inicio extends Component {
  constructor (props) {
    super(props)
    this.state = {text: ''}
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: 'https://openclipart.org/image/2400px/svg_to_png/185356/1382519138.png'}} style={{width: 100, height: 100}} />
        <TextInput
          placeholder='Busca algo'
        style={{marginTop: 10, height: 40, width: 200}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      <Button
        // onPress={onPressLearnMore}
        title='Buscar'
        color='gray'
        accessibilityLabel='Learn more about this purple button' />
      </View>)
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
