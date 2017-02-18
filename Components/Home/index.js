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
  onSearch(e){

  }
  render() {
    return (
    <Container>
      <Content contentContainerStyle={styles.container}>

      <View style={{minHeight: 210, alignSelf: 'stretch', alignItems: 'center', padding: 10, justifyContent: 'space-between'/*, backgroundColor:'red'*/}} >
        <View style={{alignItems:'center'}}>
          <Icon ios='md-search' android='md-search' style={{color: 'black', fontSize: 80}} />
          <Text style={{fontSize: 20}}>ML Search Alerts</Text>

        </View>
        <Item>
            <Input placeholder='Busca lo que quieras' value={this.state.text} style={{ textAlign:'center'}} onChangeText={(text) => this.setState({text})} />
        </Item>
        <Button
        onPress={this.onSearch}
        title="Buscar"
        color="#300099"
      />
      </View>
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
  }
})
