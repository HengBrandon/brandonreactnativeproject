/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import FloatLabelInput from './src/components/FloatLabelInput';
import {Container, Content} from 'native-base'
import LogInForm from './src/components/LoginForm'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container>
          <LogInForm/>
        {/* <Image
        style={styles.background_Image}
        source={require('./media/free-blurry-background-1636594.jpg')}
      />
        <Image source={require('./media/Save-the-Children-Logo.png')} style={{height: '10%', width: '100%'}}/>
        <FloatLabelInput name='Username' security='false'/>
        <FloatLabelInput name='Password' security='true'/>
        <Button block rounded danger
            onPress={() => console.log('my first app')}
            style = {styles.button_style}
            // accessibilityLabel="Learn more about this purple button"
        > 
          <Text >LOGIN</Text>
        </Button> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0C0C0',
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
  background_Image: {
    backgroundColor: '#ccc',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  button_style: {
    margin: 10,
  }
});
