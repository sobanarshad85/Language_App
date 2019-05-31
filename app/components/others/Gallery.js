import React, {Component} from 'react';
import {StyleSheet, Text, Platform, Linking, TouchableOpacity, View} from 'react-native';
import {requestCameraPermission} from '../others/AndroidPermissions';

export default class Gallery extends Component<Props> {

  openPhotos = () => {
    switch(Platform.OS) {
    case "ios":
      Linking.openURL("photos-redirect://");
    break;
    case "android":
      Linking.openURL("content://media/internal/images/media");
    break;
    default:
      console.log("Could not open gallery app");
   }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.openPhotos} style={styles.container2}>
        </TouchableOpacity>
      </View>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
  },
});
