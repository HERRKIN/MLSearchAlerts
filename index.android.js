/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import {
  AppRegistry,
  // StyleSheet,
  // Navigator,
  // Image,
  // Text,
  // TextInput,
  // Button,
  View
} from 'react-native'

import {Home} from './Components'


export default class inicio extends Component {
  constructor (props) {
    super(props)
    this.state = {text: ''}
  }
  render() {
    return (
              <Home />
            )
  }
}



AppRegistry.registerComponent('inicio', () => inicio);
