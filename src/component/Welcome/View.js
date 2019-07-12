import React, {Component} from 'react';
import { 
  StyleSheet, 
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Image
   } from 'react-native';
import { AppStyles, AppColors, AppSizes, AppFonts } from '@theme/';

export default class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 80, height: 80}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
        <Text style={styles.welcome}>Welcome to React Native App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F6D7A',
  },
  welcome: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#F5FCFF',
  },
});