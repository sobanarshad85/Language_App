import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';


export default class ImagePickerComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: '',
    };
    this.pickImage = this.pickImage.bind(this);
    this._showContent = this._showContent.bind(this);
  }

  pickImage(){
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.props.onChange(response);
        const source = { uri: response.uri };
        this.setState({
          avatarSource: source,
        }, () => {
          this._showContent();
        });
      }
    });
  }

  _showContent(){
    if(this.state.avatarSource == ''){
      return(
        <TouchableOpacity onPress={this.pickImage} style={styles.container}>
        </TouchableOpacity>
      )
    }
    else{
      return(
        <View>
          <TouchableOpacity onPress={this.pickImage}>
            <Image source={this.state.avatarSource} style={styles.image} />
          </TouchableOpacity>
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this._showContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
