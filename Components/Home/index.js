import React, {Component} from 'react'
// import styles from './styles.js'
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Image,
  Text,
  TextInput,
  Button,
  View
} from 'react-native'


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

export default class Home extends Component {

  static propTypes = {

  }
  constructor (props) {
    super(props)
    this.state = {text: ''}
  }
  fun(){

  }
  render () {
    return (
      <View style={styles.container} >
        <Image source={{uri: 'https://openclipart.org/image/2400px/svg_to_png/185356/1382519138.png'}} style={{width: 70, height: 70, marginBottom:30}} />
        <TextInput
          placeholder='Busca algo'
        style={{marginTop: 10, height: 40, width: 200}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      <Button
        onPress={this.fun}
        title='Buscar'
        color='gray'
        accessibilityLabel='Learn more about this purple button' />
      </View>)
  }
}
