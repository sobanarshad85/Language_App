import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class LabelTextComponent extends Component<Props> {
  render() {
    return (
      <View style={[styles.itemContainer, {height: this.props.labelHeight}]}>

        <View style={styles.labelContainer}>
          <Text style={styles.bigText}>{this.props.label}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer:{
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
  labelContainer: {
    flex: 0.35
  },
  textContainer: {
    flex: 0.7
  },
  bigText:{
    color: '#4f4f4f',
    fontSize: 20,
    fontWeight: "bold",
  },
  text:{
    fontSize: 20,
    color: '#333333',
  },
});
