import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import FilterHeaderComponent from '../others/FilterHeaderComponent';
import CardImageComponent from '../others/CardImageComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, {Line} from 'react-native-svg';


export default class FillInGapsScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      background: ['#e5e5e5', '#e5e5e5', '#e5e5e5', '#e5e5e5', '#e5e5e5', '#e5e5e5']
    });
    this.setBackground = this.setBackground.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
    };
  };

  setBackground(index, color){
    const copied = [...this.state.background]
    copied[index] = color;
    this.setState({ background: copied })
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.headerContainer}>
          <Text style={styles.contentText2}>Fill in the Gaps</Text>
        </View>

        <View style={styles.listCardContainer}>

          <View style={styles.sentenceContainer}>
            <View style={styles.blank}></View>
            <View style={styles.sentenceContainer2}>
              <Text style={styles.contentText}>Tu as un chat</Text>
            </View>
          </View>

          <View style={styles.spaceBetweenContainer}>
            <TouchableOpacity style={[styles.optionsContainer, {backgroundColor: this.state.background[3]}]} onPress={() => this.setBackground(3, '#07D38D')}>
              <Text style={styles.contentText3}>Bonjour</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.optionsContainer, {backgroundColor: this.state.background[4]}]} onPress={() => this.setBackground(4, '#ce3131')}>
              <Text style={styles.contentText3}>Sourir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.optionsContainer, {backgroundColor: this.state.background[5]}]} onPress={() => this.setBackground(5, '#ce3131')}>
              <Text style={styles.contentText3}>Merci</Text>
            </TouchableOpacity>
          </View>

        </View>


        <View style={styles.listCardContainer}>

          <View style={styles.sentenceContainer}>
            <View style={styles.blank}></View>
            <View style={styles.sentenceContainer2}>
              <Text style={styles.contentText}>xyz abc lja jsks</Text>
            </View>
          </View>

          <View style={styles.spaceBetweenContainer}>
            <TouchableOpacity style={[styles.optionsContainer, {backgroundColor: this.state.background[0]}]} onPress={() => this.setBackground(0, '#ce3131')}>
              <Text style={styles.contentText3}>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.optionsContainer, {backgroundColor: this.state.background[1]}]} onPress={() => this.setBackground(1, '#ce3131')}>
              <Text style={styles.contentText3}>Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.optionsContainer, {backgroundColor: this.state.background[2]}]} onPress={() => this.setBackground(2, '#07D38D')}>
              <Text style={styles.contentText3}>Option 3</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.buttonContainer}>
        </View>

        <TouchableOpacity  style={styles.buttonContainer2} onPress={() => navigate('LearnScreen', { title: this.props.navigation.state.params.title } )}>
          <Text style={styles.boldText}>HOME</Text>
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
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    alignSelf: 'center',
    borderRadius: 40,
    marginBottom: 10,
    backgroundColor: '#1EA1E9'
  },
  listCardContainer: {
    flex: 1.5,
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
  blank:{
    width: '22%',
    position: 'absolute',
    top: '57%',
    left: '5%',
    borderBottomWidth: 2,
    borderColor: '#1EA1E9',
  },
  sentenceContainer2: {
    flex: 1,
    marginLeft: 20
  },
  sentenceContainer: {
    flex: 0.7,
    alignSelf: 'flex-start',
    width: '100%',
  },
  spaceBetweenContainer: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10
  },
  optionsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    backgroundColor: '#e5e5e5'
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
  contentText3: {
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#95959b',
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
