import React, { Component } from 'react';
import { Button, Text, StyleSheet, ScrollView, View, KeyboardAvoidingView,
  ActivityIndicator, Image, TextInput, BackHandler, TouchableOpacity,
  Dimensions, SafeAreaView, Alert
} from 'react-native';
//import {resetPassword} from '../../backend/user/Auth';


export default class ForgotPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      email: '',
      loader: false,
    });
    this.onForgotFunc = this.onForgotFunc.bind(this);
  }

  async onForgotFunc() {
    resetPassword(this.state.email);
    Alert.alert(
          '',
          'If there is an account with this email address, you have been sent an email with instructions on how to reset your password',
          [
            {text: 'OK', onPress: () => this.props.navigation.goBack()},
          ],
        )
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.container}>

            <View style={styles.center}>
              <View style={{ paddingTop: '20%', marginBottom: "10%" }}>
                <Image style={styles.logo} resizeMode="contain" source={require('../../photos/record.png')} />
              </View>
              <View style={{ paddingVertical: 25 }}>
                <Text style={{ fontSize: 30, color: '#6b6b6b' }}>Forgot your password?</Text>
              </View>
            </View>

            <View style={styles.center}>
              <TextInput placeholder='Email' keyboardAppearance='default' autoCapitalize='none'
                returnKeyType='next' style={styles.textbox} autoCorrect={false}
                onChangeText={email => this.setState({ email })}
              />
              <Button block style={styles.button} onPress={this.onForgotFunc} title='Reset password' />
              <View>

              </View>
            </View>

            {this.state.loader ? <ActivityIndicator size="large" color="#0000ff" /> : null}

          </View>
        </ScrollView>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
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
    borderColor: '#c0c3c3',
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 10,
    color: "#000000",
  },
  logo: {
    width: Dimensions.get('window').width/2.5,
    height: Dimensions.get('window').height/10,
  },
  button: {
    backgroundColor: '#4A525E',
    width: 320,
    height: 50,
    marginBottom: 10
  }
});
