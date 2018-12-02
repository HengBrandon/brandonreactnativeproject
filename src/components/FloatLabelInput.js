import React, { Component } from 'react'
import {Item, Input, Label} from 'native-base'
import { StyleSheet } from 'react-native'

class FloatLabelInput extends Component 
{
    render () {
        return (
            <Item floatingLabel style={styles.input_text}>
              <Label style={styles.label_text}>{this.props.name}</Label>
              <Input style={styles.text_input} secureTextEntry={this.props.security}/>
            </Item>
        )
    }
}

export default FloatLabelInput

const styles = StyleSheet.create({
    input_text: {
      fontSize: 20,
      marginTop: '5%',
    },
    label_text: {
      color: '#B22222',
      marginLeft: '2%'
    },
    text_input: {
        marginTop: '2%',
    }
  });