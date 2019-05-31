import React, { Component } from 'react';
import { Button, Text, StyleSheet, ScrollView, View, KeyboardAvoidingView,
  ActivityIndicator, Image, TextInput, BackHandler, TouchableOpacity, ImageBackground,
  Dimensions, SafeAreaView, Alert
} from 'react-native';
import {_storeData, _retrieveData} from '../../backend/AsyncFuncs';
import { connectFirebase } from '../../backend/firebase/utility';
import { signUp, getCurrentUserId } from '../../backend/firebase/auth';


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      loader: false,
    });
    this.onPress = this.onPress.bind(this);
    this.focusFirstNameInput = React.createRef();
    this.focusLastNameInput = React.createRef();
    this.focusPhoneNumInput = React.createRef();
    this.focusEmailInput = React.createRef();
    this.focusPasswordInput = React.createRef();
  }

  componentDidMount(){
    connectFirebase();
  }

  async onPress(){
    await signUp(this.state.email, this.state.password, this.state.firstName,
      this.state.lastName, this.state.phone, this.state.email);
    await this.setState({ loader: false });
    Alert.alert(
      '',
      'Your account has been created',
      [
        {text: 'OK', onPress: () => this.props.navigation.goBack()},
      ],
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior='position' contentContainerStyle={styles.container} style={styles.container} keyboardVerticalOffset={-64}>
      <ImageBackground style={styles.backgroundImage} source={require('../../photos/background.jpg')}>

        <ScrollView>
          <View style={styles.container}>

            <View style={styles.center}>
              <View style={{ paddingVertical: 25, marginTop: '20%' }}>
                <Text style={{ fontSize: 30, color: '#fff' }}></Text>
              </View>
            </View>

            <View style={[styles.center, {marginTop: '20%' }] }>
              <TextInput placeholder='Enter your first name' placeholderTextColor='#aaa' keyboardAppearance='default' autoCapitalize='none'
                returnKeyType='next' style={styles.textbox} autoCorrect={false}
                onChangeText={text => this.setState({ firstName: text })}
                onSubmitEditing={() => this.focusLastNameInput.focus() }
              />

              <TextInput placeholder='Enter your last name' placeholderTextColor='#aaa' keyboardAppearance='default' autoCapitalize='none'
                returnKeyType='next' style={styles.textbox} autoCorrect={false}
                onChangeText={text => this.setState({ lastName: text })}
                onSubmitEditing={() => this.focusEmailInput.focus() }
                ref={data => {this.focusLastNameInput = data}}
              />

              <TextInput placeholder='Enter your email' placeholderTextColor='#aaa' keyboardAppearance='default' autoCapitalize='none'
                returnKeyType='next' style={styles.textbox} autoCorrect={false}                onChangeText={text => this.setState({ email: text })}
                onChangeText={text => this.setState({ email: text })}
                onSubmitEditing={() => this.focusPasswordInput.focus() }
                ref={data => {this.focusEmailInput = data}}
              />

              <TextInput placeholder='Enter your password' placeholderTextColor='#aaa' secureTextEntry returnKeyType='go'
                keyboardAppearance='default' style={styles.textbox}
                onChangeText={text => this.setState({ password: text })}
                ref={data => {this.focusPasswordInput = data}}
              />

              <TouchableOpacity onPress={() => this.onPress()}>
                <Text style={{ fontSize: 25, color: '#fff', marginVertical: 20 }}>Sign up</Text>
              </TouchableOpacity>

            </View>

            {this.state.loader ? <ActivityIndicator size="large" color="#0000ff" /> : null}

          </View>
        </ScrollView>

      </ImageBackground>
      </KeyboardAvoidingView>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage:{
    flex: 1
  },
  center: {
    alignItems: 'center',
  },
  textbox: {
    fontSize: 18,
    textAlign: 'left',
    width: 320,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
    color: "#fff",
  },
});
