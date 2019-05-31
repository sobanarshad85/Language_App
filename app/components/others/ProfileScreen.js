import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Label_Field from '../others/Label_Field'

export default class ProfileScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      visibility: false,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {
              this.props.navigation.toggleDrawer();
            }}>
            <Icon name="navicon" color={'#8200d8'} size={40}/>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <View>
              <Image style={styles.backgroundImage} source={require('../../photos/upload_image.png')}>
              </Image>
            </View>
          </View>
          <View style={styles.fieldContainer}>
            <Label_Field label={'Name'} placeholder={'John'}/>
          </View>
          <View style={styles.fieldContainer}>
            <Label_Field label={'Email'} placeholder={'extra vegetables'}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flex: 0.1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  contentContainer: {
    flex: 0.9,
  },
  imageContainer: {
    height: Dimensions.get('window').height/3,
    width: '100%',
  },
  fieldContainer: {
    flex:1,
    marginVertical: 5,
    marginHorizontal: 25,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
});
