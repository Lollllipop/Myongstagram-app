import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, KeyboardAvoidingView } from 'react-native';
import styles from './styles';

class SignUpProcess4 extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
    }
  };

  render() {
    return (
      <KeyboardAvoidingView 
        style = { styles.container }
        behavior='padding'
        keyboardVerticalOffset={0}
      >
        <Text style = { { fontSize: 17 } }> 명스타그램에 오신 것을 환영합니다! </Text>
        <View style = { [styles.buttonStyle, { marginTop: 33 }] }>
          <Button
            title = '확인'
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default SignUpProcess4;