import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import firestore from 'firebase/firestore';
import { withNavigation } from 'react-navigation';
import GlobalConst from '../../config/GlobalConst';
import AsyncStorage from '@react-native-community/async-storage';


class SignOutComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.signout = this.signout.bind(this);
  }

  signout(){
    let that = this;
    firebase.auth().signOut().then(function() {
      AsyncStorage.removeItem(GlobalConst.STORAGE_KEYS.userId).then((data) => {
        that.props.navigation.navigate('AuthLoading');
     });

    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.signout() }>
         <Text style={styles.text}>
          LOG OUT
         </Text>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(SignOutComponent);


const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#fff'
  },
});
