/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image } from 'react-native';
import FloatLabelInput from './FloatLabelInput';
import {Button, Text, Form} from 'native-base'

export default class LogInForm extends Component {
  render() {
    return (
      <Form style={styles.container}>
        <Image
        style={styles.background_Image}
        source={require('../../media/free-blurry-background-1636594.jpg')}
      />
        <Image source={require('../../media/Save-the-Children-Logo.png')} style={{width: '100%', height: '10%'}}/>
        <FloatLabelInput name='Username' security = {false}/>
        <FloatLabelInput name='Password' security = {true} />
        <Button block rounded danger
            onPress={() => console.log('my first app')}
            style = {styles.button_style}
            // accessibilityLabel="Learn more about this purple button"
        > 
          <Text >LOGIN</Text>
        </Button>
      </Form>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0C0C0',
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
    margin: 15
  }
});