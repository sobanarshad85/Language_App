import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import FilterHeaderComponent from '../others/FilterHeaderComponent';
import CardImageComponent from '../others/CardImageComponent';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class WhatHearScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      isCorrect: false
    });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
    };
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.headerContainer}>
          <Text style={styles.contentText2}>What did you hear?</Text>
        </View>

        <View style={styles.buttonContainer2}>
          <Icon name={"play-circle-o"} color={'#1EA1E9'} size={80}
            onPress={() => alert('The sound will start playing')}/>
        </View>

        <Text style={styles.normalText}>Click on the text that you hear</Text>

        <TouchableOpacity style={styles.listCardContainer} onPress={() => alert('Incorrect!')}>
          <Text style={styles.contentText}>xyz abc lja jsks</Text>
          {this.state.isSelected2 ?
            <Icon style={{marginLeft: 50}} name={"volume-up"} color={'#1EA1E9'} size={20} />
          : null }
        </TouchableOpacity>

        <TouchableOpacity style={[styles.listCardContainer, this.state.isCorrect ? {backgroundColor: '#07D38D'} : null]}
          onPress={() => { alert('Correct!'); this.setState({isCorrect: true}) }}>
          <Text style={[styles.contentText, this.state.isCorrect ? {color: '#000'} : null]}>This is a placeholder text only</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
        </View>

        <TouchableOpacity  style={styles.buttonContainer3} onPress={() => navigate('FillInGapsScreen', { title: this.props.navigation.state.params.title } )}>
          <Text style={styles.boldText}>NEXT</Text>
        </TouchableOpacity>

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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18
  },
  buttonContainer3: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    alignSelf: 'center',
    borderRadius: 40,
    marginBottom: 30,
    backgroundColor: '#1EA1E9'
  },
  listCardContainer: {
    flex: 1,
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
  bottomContainer: {
    flex: 1,
    backgroundColor: '#057200'
  },
  contentText: {
    fontSize: 25,
    fontWeight: 'normal',
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
  normalText:{
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'normal',
    color: '#7c7c7c',
    marginVertical: 10,
  },
  boldText:{
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
