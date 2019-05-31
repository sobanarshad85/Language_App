import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, CameraRoll, ImageBackground, Button, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Label_Field from '../others/Label_Field'
import DropdownFieldComponent from '../others/DropdownFieldComponent';
import ImagePickerComponent from '../others/ImagePickerComponent';
import {requestCameraPermission} from '../others/AndroidPermissions';


export default class NewListingScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      isPhotoAdded: '',
    });
    this.refresh = this.refresh.bind(this);
  }

  refresh(imageb64){
    this.setState({
      isPhotoAdded: true,
      imageb64: imageb64,
      takePhotoText: 'Retake this photo by tapping the box below'
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground style={styles.backgroundImage} source={require('../../photos/upload_image.png')}>
            <ImagePickerComponent response={(imageb64) => this.refresh(imageb64)} />
          </ImageBackground>
        </View>

        { this.state.isPhotoAdded ?
          <View style={styles.fieldsAreaContainer}>
            <View style={styles.fieldContainer}>
              <Label_Field label={'Name'} placeholder={'e.g. galaxy s 10'} textInputHeight={50}/>
            </View>
            <View style={styles.fieldContainer}>
              <Label_Field label={'Make'} placeholder={'e.g. samsung'} textInputHeight={50}/>
            </View>
            <View style={styles.fieldContainer}>
              <Label_Field label={'Model'} placeholder={'e.g. s10'} textInputHeight={50}/>
            </View>
            <View style={styles.fieldContainer}>
              <Label_Field label={'Serial No.'} placeholder={'e.g. 903345431'} textInputHeight={50}/>
            </View>
            <View style={styles.fieldContainer}>
              <Label_Field label={'Your notes'} placeholder={'write your notes here...'} textInputHeight={100}/>
            </View>
            <View style={styles.pickupButtonContainer}>
              <Button
                onPress={() => alert('Saved!')}
                title="Save"
                color="#8200d8"
              />
            </View>
          </View>
          :
            null
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: Dimensions.get('window').height/3,
    width: '100%',
  },
  fieldsAreaContainer:{
    flex: 0.4,
    margin: 5,
  },
  fieldContainer: {
    flex:1,
    marginVertical: 5,
  },
  pickupButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 10,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  contentText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
