import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class NewLearningComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <TouchableOpacity onPress={this.props.onPress} style={[styles.listCardContainer, { backgroundColor: this.props.backgroundColor }]}>
        <Text style={styles.contentText}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listCardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 1,
    shadowOpacity: 0.4,
    elevation: 1,
    borderColor: '#adadad',
    marginVertical: 5,
    marginHorizontal: 5,
  },
  contentText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
    color: '#fff',
  },
});
