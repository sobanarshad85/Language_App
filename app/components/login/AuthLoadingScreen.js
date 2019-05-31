import React from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View, SafeAreaView, Image, Dimensions } from 'react-native';
import GlobalConst from '../../config/GlobalConst';
import AsyncStorage from '@react-native-community/async-storage';


export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

   _bootstrapAsync = async () => {
     const userToken = await AsyncStorage.getItem(GlobalConst.STORAGE_KEYS.userId);
     let that  = this;
     setTimeout(function() {
       that.props.navigation.navigate(userToken ? 'App' : 'Auth');
     }, 1500);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} resizeMode="contain" source={require('../../photos/logo.png')} />
      </SafeAreaView> 
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: Dimensions.get('window').width/1,
    height: Dimensions.get('window').height/5,
  }
});
