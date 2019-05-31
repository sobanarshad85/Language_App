import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class TextComponent extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, this.props.style]}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
    fontSize: 12,
  },
});
