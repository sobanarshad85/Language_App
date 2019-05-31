import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';


export default class Label_Field extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      fieldValue: '',
    });
  }

  async changeCallback(text){
    await this.setState({fieldValue: text});
    return this.state.fieldValue;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{this.props.label}</Text>
        </View>
        <View style={styles.fieldContainer}>
          <TextInput
            placeholder={this.props.placeholder}
            style={[styles.textInput, {height: this.props.textInputHeight}]}
            onChangeText={(fieldValue) =>  this.props.onChange( this.changeCallback(fieldValue) )}
            value={this.state.fieldValue}
            editable={this.props.disable}
            selectTextOnFocus={this.props.disable}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelContainer: {
    flex: 1,
  },
  fieldContainer: {
    flex: 1,
  },
  textInput: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#adadad',
    textAlignVertical: "top",
    fontSize: 20,
    // minHeight: 50, //... For dynamic height
//    maxHeight: 200,
  },
  labelText: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
