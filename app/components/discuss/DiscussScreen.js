import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, ScrollView, Button} from 'react-native';
import CardTextComponent2 from '../others/CardTextComponent2';


export default class DiscussScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      newPost: '',
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.statusContainer}>
          <TextInput placeholder="Say something to the community..."
            style={styles.textInput}
            multiline = {true}
            onChangeText={(text) => this.setState({newPost: text}) }
          />
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => alert('Posted!')}
              title="Post"
              color="#1EA1E9"
              accessibilityLabel="Share your post"
            />
          </View>
        </View>
        <View style={styles.container}>
          <CardTextComponent2 navigation={this.props.navigation}/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusContainer: {
    flex: 0,
    paddingBottom: 10,
  },
  buttonContainer: {
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  textInput: {
    textAlignVertical: "top",
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#adadad',
    height: 100,
    fontSize: 20,
    padding: 10,
    margin: 5,
  },
});
