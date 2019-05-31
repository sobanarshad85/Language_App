import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class ChatScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>ChatScreen screen!</Text>
        <Text style={styles.instructions}>Do you want a chat screen here or</Text>
        <Text style={styles.instructions}>pre defined responses will do?</Text>
      </View>
    );
  }
}

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
