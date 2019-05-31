import React, { Component } from 'react';
import { Button, Text, StyleSheet, ScrollView, View, KeyboardAvoidingView,
  ActivityIndicator, Image, TextInput, BackHandler, TouchableOpacity, ImageBackground,
  Dimensions, SafeAreaView
} from 'react-native';
import {_storeData, _retrieveData, _storeMultipleData} from '../../backend/AsyncFuncs';
import { connectFirebase, getData } from '../../backend/firebase/utility';
import { signIn, getCurrentUserId } from '../../backend/firebase/auth';
import GlobalConst from '../../config/GlobalConst';


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      email: '',
      password: '',
      loader: false,
    });
    this.onLoginFunc = this.onLoginFunc.bind(this);
    this.focusPasswordInput = React.createRef();
  }

  componentDidMount(){
    connectFirebase();
  }

  async onLoginFunc() {
    if(this.state.email == '' || this.state.password == ''){
      alert('Email and password fields cannot be empty')
    }
    else{
      this.setState({loader: true});
      let callback = await signIn(this.state.email, this.state.password);
      this.setState({loader: false});
      if(callback){
        let userId = await getCurrentUserId();
        await _storeData(GlobalConst.STORAGE_KEYS.userId, userId);
        //save user info
        let userData = await getData('Users', userId);
        await _storeMultipleData([
          [GlobalConst.STORAGE_KEYS.userName, userData.firstName + ' ' + userData.lastName],
          [GlobalConst.STORAGE_KEYS.email, userData.email],
          [GlobalConst.STORAGE_KEYS.phoneNum, userData.phoneNum],
        ]);

        this.props.navigation.navigate('DashboardScreen');
      }
    }
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
              <TextInput placeholder='Enter your email' placeholderTextColor='#aaa' keyboardAppearance='default' autoCapitalize='none'
                returnKeyType='next' style={styles.textbox} autoCorrect={false}
                onChangeText={email => this.setState({ email })}
                onSubmitEditing={() => this.focusPasswordInput.focus() }
              />

              <TextInput placeholder='Enter your password' placeholderTextColor='#aaa' secureTextEntry returnKeyType='go'
                keyboardAppearance='default' style={styles.textbox}
                onChangeText={password => this.setState({ password })}
                ref={data => {this.focusPasswordInput = data}}
              />

              <TouchableOpacity onPress={() => this.onLoginFunc()}>
                <Text style={{ fontSize: 25, color: '#fff', marginVertical: 20 }}>Sign in</Text>
              </TouchableOpacity>

              <View>
                <TouchableOpacity onPress={() => navigate('SignupScreen')}>
                  <Text style={{ fontSize: 16, color: '#fff' }}>New user? Sign up</Text>
                </TouchableOpacity>
              </View>
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
