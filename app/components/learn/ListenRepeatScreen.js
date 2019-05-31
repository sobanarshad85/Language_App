import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Alert} from 'react-native';
import FilterHeaderComponent from '../others/FilterHeaderComponent';
import CardImageComponent from '../others/CardImageComponent';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ListenRepeatScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      isSelected1: false,
      isSelected2: false,
      isSelected3: false,
    });
    this.toggleSoundIcon = this.toggleSoundIcon.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
    };
  };

  toggleSoundIcon(number){
    if(number == 1){
      this.setState({
        isSelected1: true,
        isSelected2: false,
        isSelected3: false,
      })
    }
    if(number == 2){
      this.setState({
        isSelected1: false,
        isSelected2: true,
        isSelected3: false,
      })
    }
    if(number == 3){
      this.setState({
        isSelected1: false,
        isSelected2: false,
        isSelected3: true,
      })
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.headerContainer}>
          <Text style={styles.contentText2}>Listen and Repeat</Text>
        </View>

        <TouchableOpacity style={styles.listCardContainer} onPress={() => this.toggleSoundIcon(1)}>
          <Text style={styles.contentText}>Bonjour</Text>
          {this.state.isSelected1 ?
            <Icon style={{marginLeft: 50}} name={"volume-up"} color={'#1EA1E9'} size={20} />
          : null }
        </TouchableOpacity>

        <TouchableOpacity style={styles.listCardContainer} onPress={() => this.toggleSoundIcon(2)}>
          <Text style={styles.contentText}>Salut</Text>
          {this.state.isSelected2 ?
            <Icon style={{marginLeft: 50}} name={"volume-up"} color={'#1EA1E9'} size={20} />
          : null }
        </TouchableOpacity>

        <TouchableOpacity style={styles.listCardContainer} onPress={() => this.toggleSoundIcon(3)}>
          <Text style={styles.contentText}>Coucou</Text>
          {this.state.isSelected3 ?
            <Icon style={{marginLeft: 50}} name={"volume-up"} color={'#1EA1E9'} size={20} />
          : null }
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => Alert.alert('', 'recording will start',
                [
                  {text: 'OK', onPress: () => navigate('WhatHearScreen', { title: this.props.navigation.state.params.title })},
                ]
              )}>
            <Image
              style={{width: 100, height: 100}}
              source={require('../../photos/record.png')}
            />
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF3F8',
  },
  headerContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1EA1E9',
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer2: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 100,
    borderWidth: 1
  },
  listCardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 1,
    shadowOpacity: 0.4,
    elevation: 1,
    borderColor: '#adadad',
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: '#fff'
  },
  contentText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
    color: '#95959b',
  },
  contentText2: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
    color: '#fff',
  },
});
