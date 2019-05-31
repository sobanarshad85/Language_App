import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView,
  Image, Button, Dimensions, ImageBackground, ActivityIndicator, Alert, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Label_Field from '../others/Label_Field';
import ImagePickerComponent from '../others/ImagePickerComponent';
import { connectFirebase, saveData, uploadImage, getDocByObjectKey, getData } from '../../backend/firebase/utility';
import {_storeData, _retrieveData} from '../../backend/AsyncFuncs';
import GlobalConst from '../../config/GlobalConst';
import ImageResizer from 'react-native-image-resizer';



export default class ProfileScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      loader: false,
      oldName: '',
      oldImage: '',
      name: '',
      email: '',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/tinkerbuy-c8eee.appspot.com/o/loading.jpg?alt=media&token=47cc5213-ffdb-4def-b165-0343339fe206',
      imageB64String: '',
      imageName: '',
      imageType: '',
      uploadProgress: '-1'
    });
    this.onChange = this.onChange.bind(this);
    this.onPress = this.onPress.bind(this);
    this.getUserData = this.getUserData.bind(this);
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

  componentDidMount(){
    connectFirebase();
    this.getUserData();
  }

  async getUserData(){
    let userData = await getData('Users', 'Gla8BiB0hyaWNbtKTgaQJv8whaj2');
    await this.setState({
      oldName: userData.firstName,
      oldImage: userData.imageUrl,
      name: userData.firstName,
      email: userData.email,
      imageUrl: userData.imageUrl
    });
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }

  onChange(text, identifier){
    if(identifier == 'image')
      this.setState({
        imageB64String: text.data,
        imageName: text.fileName,
        imageUrl: Platform.OS === 'ios' ? text.uri : text.path,
        imageType: text.type
      });
    else
      text.then((text) => {
        this.setState({ [identifier]: text });
      });
  }


  async onPress(){
    await this.setState({ loader: true });
    //TODO change with userId
    let docRef = await getDocByObjectKey('Users', 'firstName', this.state.oldName);
    this.setState({ oldName: this.state.name });

    jsonObect = {
      firstName: this.state.name,
      email: this.state.email
    }

    await saveData('Users', docRef.id, jsonObect);

    let iteratorNum = 0;

    if(this.state.oldImage != this.state.imageUrl){
      let resizedImage = await ImageResizer.createResizedImage(this.state.imageUrl, Dimensions.get('window').width, Dimensions.get('window').height/3, 'JPEG', 80);
      await this.setState({
        imageName: resizedImage.name,
        imageUrl: resizedImage.uri,
      });

      await uploadImage(this.state.imageUrl, this.state.imageType, 'ProfilePics', this.state.imageName, 'Users', docRef);
      let that = this;

      let refreshId = setInterval(function() {
        iteratorNum += 1;
        _retrieveData(GlobalConst.STORAGE_KEYS.imageUploadProgress).then((data) => {
          that.setState({uploadProgress: data});
          if(data == '100') {
            clearInterval(refreshId);
            Alert.alert( '', 'Profile is updated',
              [ {text: 'OK', onPress: () => that.props.navigation.goBack()} ] );
          }
          if(data == '-1') {
            clearInterval(refreshId);
            Alert.alert( '', 'Something went wrong',
              [ {text: 'OK', onPress: () => that.props.navigation.goBack()} ] );
          }
          if(iteratorNum == 120) {
            clearInterval(refreshId);
            Alert.alert( '', 'Picture uploading taking too long. Please upload a low resolution picture',
              [ {text: 'OK', onPress: () => that.props.navigation.goBack()} ] );
          }
        })
      }, 1000);

    }
    else {
      Alert.alert( '', 'Profile is updated',
        [ {text: 'OK', onPress: () => this.props.navigation.goBack()} ] );
    }

    await this.setState({loader: false});
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollviewContainer}>

        <View style={styles.imageContainer}>
          <ImageBackground style={styles.backgroundImage} resizeMode={'contain'} source={{uri: this.state.imageUrl + '?' + new Date()}}>
            <ImagePickerComponent onChange={(imageData) => this.onChange(imageData, 'image')}/>
          </ImageBackground>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.fieldContainer}>
            <Label_Field _flexDirection={'column'} labelFlex={1.5} fieldFlex={3} onChange={(text) => this.onChange(text, 'name')}
                label={'Name'} textInputHeight={50} placeholder={this.state.name}
                onSubmitEditing={() => { this.focusNextField('emailField') }} />
          </View>
          <View style={styles.fieldContainer}>
            <Label_Field _flexDirection={'column'} labelFlex={1.5} fieldFlex={3} onChange={(text) => this.onChange(text, 'email')}
            label={'Email'} textInputHeight={50} placeholder={this.state.email}
            onRef={(ref) => { this.inputs['emailField'] = ref }} />
          </View>
        </View>

        <View style={styles.buttonBottom}>
          <TouchableOpacity  style={styles.buttonContainer} onPress={() => this.onPress()}>
            <Text style={styles.boldText}>SAVE</Text>
          </TouchableOpacity>
        </View>

        {this.state.uploadProgress != '-1' ? <Text style={styles.loadingText}>Upload Completed: {this.state.uploadProgress}%</Text>
          : null }
        {this.state.loader ? <ActivityIndicator size="large" color="#0000ff" /> : null}

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollviewContainer:{
    flexGrow: 1,
  },
  imageContainer: {
    height: Dimensions.get('window').height/3,
    width: '100%',
  },
  contentContainer:{
    flex: 0.4,
    margin: 5,
  },
  fieldContainer: {
    flex: 1,
    marginVertical: 10,
  },
  buttonBottom: {
    flex: 0.2,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    alignSelf: 'center',
    borderRadius: 40,
    marginBottom: 10,
    paddingVertical: 15,
    backgroundColor: '#1EA1E9'
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  boldText:{
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
