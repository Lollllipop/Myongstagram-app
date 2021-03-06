import React, { Component } from 'react';
import { 
  StyleSheet, 
  Button,
  Text, 
  View, 
  } from 'react-native';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';

class PasswordEditScreen extends Component {
  static navigationOptions = {
    title: 'Myongstagram',
    headerLeft: <FontAwesome 
      name = "camera" 
      size = {25} 
      color = "black"
      style = { { marginLeft: 13 } }
    />,
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf:'center',
      width: '70%',
    },
    headerStyle: {
      backgroundColor: '#FBFBFB'
    },
  };

  render() {
    return (
      <View>
        <Text> PostList </Text>
        <Button
         title = '유저 프로필!'
         onPress = {() => {
           this.props.navigation.navigate('OtherProfile');
          }}
        />
        <Button
         title = '댓글!'
         onPress s= {() => this.props.navigation.navigate('Comment')}
        />
      </View>
    );
  }
}

export default PasswordEditScreen;