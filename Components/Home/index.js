import React, { Component } from 'react';
import {Container, Content, Form, Item, Input, Icon} from 'native-base'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button
} from 'react-native';

export default class Home extends Component {

  constructor (props) {
    super(props)
    this.state={text:''}
  }
  render() {
    return (
    <Container>
      <Content contentContainerStyle={styles.container}>

      <View style={{minHeight: 200, alignSelf: 'stretch', alignItems: 'center', padding: 10, justifyContent: 'space-between', /*backgroundColor:'red'*/}} >
        <View style={{alignItems:'center'}}>
          <Icon ios='md-search' android='md-search' style={{color: 'black', fontSize: 80}} />
          <Text style={{fontSize: 20}}>ML Search Alerts</Text>

        </View>
        {/* <Image source={{uri: 'https://openclipart.org/image/2400px/svg_to_png/185356/1382519138.png'}} style={{width: 70, height: 70, marginBottom: 10}} /> */}
        <TextInput
          placeholder='Buscar'
          style={{height: 40, alignSelf: 'stretch', textAlign:'center'}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
        //onPress={onPressLearnMore}
        title="Buscar"
        color="#300099"
      />
      </View>
        {/* <Form>
          <Item>
            <Input placeholder='Username' />
          </Item>
        </Form> */}
    </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
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
